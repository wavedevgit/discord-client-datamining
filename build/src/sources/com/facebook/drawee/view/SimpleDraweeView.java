package com.facebook.drawee.view;

import android.content.Context;
import android.content.res.TypedArray;
import android.net.Uri;
import android.util.AttributeSet;
import com.facebook.common.internal.Supplier;
import com.facebook.drawee.controller.AbstractDraweeControllerBuilder;
import com.facebook.imagepipeline.request.ImageRequest;
import p8.j;
import x8.f;
@Deprecated
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class SimpleDraweeView extends b {
    private static Supplier sDraweecontrollerbuildersupplier;
    private AbstractDraweeControllerBuilder mControllerBuilder;

    public SimpleDraweeView(Context context) {
        super(context);
        c(context, null);
    }

    private void c(Context context, AttributeSet attributeSet) {
        int resourceId;
        try {
            if (za.b.d()) {
                za.b.a("SimpleDraweeView#init");
            }
            if (isInEditMode()) {
                getTopLevelDrawable().setVisible(true, false);
                getTopLevelDrawable().invalidateSelf();
            } else {
                j.h(sDraweecontrollerbuildersupplier, "SimpleDraweeView was not initialized!");
                this.mControllerBuilder = (AbstractDraweeControllerBuilder) sDraweecontrollerbuildersupplier.get();
            }
            if (attributeSet != null) {
                TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, e9.a.E);
                if (obtainStyledAttributes.hasValue(e9.a.G)) {
                    setImageURI(Uri.parse(obtainStyledAttributes.getString(e9.a.G)), (Object) null);
                } else if (obtainStyledAttributes.hasValue(e9.a.F) && (resourceId = obtainStyledAttributes.getResourceId(e9.a.F, -1)) != -1) {
                    if (isInEditMode()) {
                        setImageResource(resourceId);
                    } else {
                        setActualImageResource(resourceId);
                    }
                }
                obtainStyledAttributes.recycle();
            }
            if (za.b.d()) {
                za.b.b();
            }
        } catch (Throwable th2) {
            if (za.b.d()) {
                za.b.b();
            }
            throw th2;
        }
    }

    public static void initialize(Supplier supplier) {
        sDraweecontrollerbuildersupplier = supplier;
    }

    public static void shutDown() {
        sDraweecontrollerbuildersupplier = null;
    }

    public AbstractDraweeControllerBuilder getControllerBuilder() {
        return this.mControllerBuilder;
    }

    public void setActualImageResource(int i10) {
        setActualImageResource(i10, null);
    }

    public void setImageRequest(ImageRequest imageRequest) {
        setController(this.mControllerBuilder.E(imageRequest).b(getController()).build());
    }

    @Override // com.facebook.drawee.view.a, android.widget.ImageView
    public void setImageResource(int i10) {
        super.setImageResource(i10);
    }

    @Override // com.facebook.drawee.view.a, android.widget.ImageView
    public void setImageURI(Uri uri) {
        setImageURI(uri, (Object) null);
    }

    public void setActualImageResource(int i10, Object obj) {
        setImageURI(f.h(i10), obj);
    }

    public void setImageURI(String str) {
        setImageURI(str, (Object) null);
    }

    public SimpleDraweeView(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        c(context, attributeSet);
    }

    public void setImageURI(Uri uri, Object obj) {
        setController(this.mControllerBuilder.B(obj).a(uri).b(getController()).build());
    }

    public void setImageURI(String str, Object obj) {
        setImageURI(str != null ? Uri.parse(str) : null, obj);
    }
}
