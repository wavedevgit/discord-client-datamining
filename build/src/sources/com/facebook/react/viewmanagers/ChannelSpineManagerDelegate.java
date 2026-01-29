package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.BaseViewManagerDelegate;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.viewmanagers.ChannelSpineManagerInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class ChannelSpineManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode> & ChannelSpineManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
    /* JADX WARN: Incorrect types in method signature: (TU;)V */
    public ChannelSpineManagerDelegate(BaseViewManager baseViewManager) {
        super(baseViewManager);
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void setProperty(T t10, String str, Object obj) {
        int intValue;
        float floatValue;
        str.getClass();
        if (!str.equals("numRows")) {
            if (!str.equals("rowHeight")) {
                super.kotlinCompat$setProperty(t10, str, obj);
                return;
            }
            ChannelSpineManagerInterface channelSpineManagerInterface = (ChannelSpineManagerInterface) this.mViewManager;
            if (obj == null) {
                floatValue = Float.NaN;
            } else {
                floatValue = ((Double) obj).floatValue();
            }
            channelSpineManagerInterface.setRowHeight(t10, floatValue);
            return;
        }
        ChannelSpineManagerInterface channelSpineManagerInterface2 = (ChannelSpineManagerInterface) this.mViewManager;
        if (obj == null) {
            intValue = 0;
        } else {
            intValue = ((Double) obj).intValue();
        }
        channelSpineManagerInterface2.setNumRows(t10, intValue);
    }
}
