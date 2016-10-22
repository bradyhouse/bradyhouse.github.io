Tween.js (create)
======

Executing the command `./fiddle.sh "create" "tween" "fiddle-0000-Template"` from `scripts` directory produces the following output.


    H o u s e
    oooooooooooo  o8o        .o8        .o8  oooo
     888       8  `"'        888        888   888
     888         oooo   .oooo888   .oooo888   888   .ooooo.
     888oooo8     888  d88   888  d88   888   888  d88   88b
     888          888  888   888  888   888   888  888ooo888
     888          888  888   888  888   888   888  888    .o
    o888o        o888o  Y8bod88P   Y8bod88P  o888o  Y8bod8P
    
    FIDDLE.SH
    FIDDLE-DELETE.SH
    
    FIDDLE-CREATE.SH
    09-29-16
    Password:
    Done. The "../fiddles/tween/fiddle-0000-Template" directory has been initialized.
    FIDDLE-INDEX.SH
    09-29-16
    Done. All "tween" fiddles have been re-indexed.
    

Note, when an `tween` fiddle is created, the `fiddle.sh index tween` command is automatically initiated.  This 
command will add a reference to the fiddle to the root angular [index.html](index.html) page.

### Additional Info

[Tween.js](../tween) fiddles are created to simply run in the browser.  This means, the resulting sandbox can
be hosted using [live-server](https://www.npmjs.com/package/live-server) or any type of vanilla web server
package. The contents of the sandbox is based entirely on the contents of the [template](template) directory.


