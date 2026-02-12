package com.horcrux.svg;

import android.content.Context;
import android.graphics.Bitmap;
import android.renderscript.Allocation;
import android.renderscript.Element;
import android.renderscript.RenderScript;
import android.renderscript.ScriptIntrinsicBlur;
import com.facebook.react.bridge.ReactContext;
import java.util.HashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class n extends q {

    /* renamed from: i  reason: collision with root package name */
    String f17862i;

    /* renamed from: o  reason: collision with root package name */
    float f17863o;

    /* renamed from: p  reason: collision with root package name */
    float f17864p;

    /* renamed from: q  reason: collision with root package name */
    s f17865q;

    public n(ReactContext reactContext) {
        super(reactContext);
    }

    private Bitmap l(Context context, Bitmap bitmap) {
        float max = Math.max(this.f17863o, this.f17864p) * 2.0f;
        if (max <= 0.0f) {
            return bitmap;
        }
        float min = Math.min(max, 25.0f);
        Bitmap createBitmap = Bitmap.createBitmap(bitmap);
        RenderScript create = RenderScript.create(context);
        ScriptIntrinsicBlur create2 = ScriptIntrinsicBlur.create(create, Element.U8_4(create));
        Allocation createFromBitmap = Allocation.createFromBitmap(create, bitmap);
        Allocation createFromBitmap2 = Allocation.createFromBitmap(create, createBitmap);
        create2.setRadius(min);
        create2.setInput(createFromBitmap);
        create2.forEach(createFromBitmap2);
        createFromBitmap2.copyTo(createBitmap);
        createFromBitmap.destroy();
        createFromBitmap2.destroy();
        create.destroy();
        return Bitmap.createScaledBitmap(createBitmap, bitmap.getWidth(), bitmap.getHeight(), false);
    }

    @Override // com.horcrux.svg.q
    public Bitmap d(HashMap hashMap, Bitmap bitmap) {
        return l(getContext(), q.f(hashMap, bitmap, this.f17862i));
    }

    public void m(String str) {
        this.f17865q = s.d(str);
        invalidate();
    }

    public void n(String str) {
        this.f17862i = str;
        invalidate();
    }

    public void o(float f10) {
        this.f17863o = f10;
        invalidate();
    }

    public void p(float f10) {
        this.f17864p = f10;
        invalidate();
    }
}
