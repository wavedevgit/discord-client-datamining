package com.facebook.drawee.view;

import android.content.Context;
import android.util.AttributeSet;
import com.facebook.drawee.generic.GenericDraweeHierarchy;
import com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class b extends a {
    public b(Context context, GenericDraweeHierarchy genericDraweeHierarchy) {
        super(context);
        setHierarchy(genericDraweeHierarchy);
    }

    protected void inflateHierarchy(Context context, AttributeSet attributeSet) {
        if (ya.b.d()) {
            ya.b.a("GenericDraweeView#inflateHierarchy");
        }
        GenericDraweeHierarchyBuilder d10 = l9.a.d(context, attributeSet);
        setAspectRatio(d10.f());
        setHierarchy(d10.a());
        if (ya.b.d()) {
            ya.b.b();
        }
    }

    public b(Context context) {
        super(context);
        inflateHierarchy(context, null);
    }

    public b(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        inflateHierarchy(context, attributeSet);
    }
}
