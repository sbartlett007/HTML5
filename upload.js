function acknowledge(file_handle) {
    var size = file_handle.size;
    var fname = file_handle.name;
    var message = "You have chosen the file '" +
    fname + "'. This appears to be a recognizable image, totaling " + size + " bytes in size. You're smarter than I thought!";
    alert(message);
    }
function complain(fname, ext) {
        var message = "The file named '" + fname + "'does not appear to have an acceptable extension. Hey dummy " + ext + " is not a picture type";
        alert(message);
        }
function handle_file_selection(item) {
    var f = item.files[0];
    var fname = f.name;
    var last_index = fname.lastIndexOf('.');
    if (last_index == -1) {
    complain(fname, "none");
    return;
    }
    var ext = fname.substr(last_index + 1);
    if (ext.toLowerCase() in {'gif': '',
    'jpg': '',
    'png': '',
    'tif': ''
    }) {
    acknowledge(f);
    } else {
    complain(fname, ext);
    }
    }