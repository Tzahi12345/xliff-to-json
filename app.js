var fs = require('fs');
var path = require('path');
const xliff2js = require('xliff/xliff12ToJs');
const targetOfjs = require('xliff/targetOfjs');

// gets all files in input with extension 'xlf'
let files = recFindByExt('./input', 'xlf');

for (let i = 0; i < files.length; i++) {
    let file = files[i];
    let base_file_name = file.replace(/^.*[\\\/]/, '');

    let file_info = fs.readFileSync(file, "utf8");

    // getting data
    const json_obj = xliff2js(file_info);

    // got data, now convert to JSON
    const res = targetOfjs(json_obj);
    const string_res = JSON.stringify(res, null, 2);

    // writes new JSON file
    const new_path = path.join('./output', base_file_name.substring(0, base_file_name.length - 3) + 'json');
    fs.writeFileSync(new_path, string_res);
}

// function to find all files in a directory with a specific extension
function recFindByExt(base,ext,files,result) 
{
    files = files || fs.readdirSync(base) 
    result = result || [] 

    files.forEach( 
        function (file) {
            var newbase = path.join(base,file)
            if ( fs.statSync(newbase).isDirectory() )
            {
                result = recFindByExt(newbase,ext,fs.readdirSync(newbase),result)
            }
            else
            {
                if ( file.substr(-1*(ext.length+1)) == '.' + ext )
                {
                    result.push(newbase)
                } 
            }
        }
    )
    return result
}