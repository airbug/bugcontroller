/*
 * Copyright (c) 2014 airbug Inc. All rights reserved.
 *
 * All software, both binary and source contained in this work is the exclusive property
 * of airbug Inc. Modification, decompilation, disassembly, or any other means of discovering
 * the source code of this software is prohibited. This work is protected under the United
 * States copyright law and other international copyright treaties and conventions.
 */


//-------------------------------------------------------------------------------
// Annotations
//-------------------------------------------------------------------------------

//@Export('bugcontroller.ControllerTagScan')

//@Require('Class')
//@Require('bugcontroller.ControllerTag')
//@Require('bugmeta.TagClassTagScan')


//-------------------------------------------------------------------------------
// Context
//-------------------------------------------------------------------------------

require('bugpack').context("*", function(bugpack) {

    //-------------------------------------------------------------------------------
    // BugPack
    //-------------------------------------------------------------------------------

    var Class               = bugpack.require('Class');
    var ControllerTag       = bugpack.require('bugcontroller.ControllerTag');
    var TagClassTagScan     = bugpack.require('bugmeta.TagClassTagScan');


    //-------------------------------------------------------------------------------
    // Declare Class
    //-------------------------------------------------------------------------------

    /**
     * @class
     * @extends {TagClassTagScan}
     */
    var ControllerTagScan = Class.extend(TagClassTagScan, {

        _name: "bugcontroller.ControllerTagScan",


        //-------------------------------------------------------------------------------
        // Constructor
        //-------------------------------------------------------------------------------

        /**
         * @constructs
         * @param {MetaContext} metaContext
         * @param {ControllerTagProcessor} processor
         */
        _constructor: function(metaContext, processor) {
            this._super(metaContext, processor, ControllerTag.getClass());
        }
    });


    //-------------------------------------------------------------------------------
    // Exports
    //-------------------------------------------------------------------------------

    bugpack.export('bugcontroller.ControllerTagScan', ControllerTagScan);
});
