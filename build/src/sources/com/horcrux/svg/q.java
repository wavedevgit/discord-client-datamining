package com.horcrux.svg;

import android.graphics.Bitmap;
import com.facebook.react.bridge.Dynamic;
import com.facebook.react.bridge.ReactContext;
import java.util.HashMap;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class q extends e {

    /* renamed from: d  reason: collision with root package name */
    private String f16623d;

    /* renamed from: e  reason: collision with root package name */
    public final FilterRegion f16624e;

    public q(ReactContext reactContext) {
        super(reactContext);
        this.f16624e = new FilterRegion();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public static Bitmap e(HashMap hashMap, Bitmap bitmap, String str) {
        Bitmap bitmap2;
        if (str != null) {
            bitmap2 = (Bitmap) hashMap.get(str);
        } else {
            bitmap2 = null;
        }
        if (bitmap2 != null) {
            return bitmap2;
        }
        return bitmap;
    }

    public abstract Bitmap c(HashMap hashMap, Bitmap bitmap);

    public String d() {
        return this.f16623d;
    }

    public void f(Dynamic dynamic) {
        this.f16624e.setHeight(dynamic);
        invalidate();
    }

    public void g(String str) {
        this.f16623d = str;
        invalidate();
    }

    public void h(Dynamic dynamic) {
        this.f16624e.setWidth(dynamic);
        invalidate();
    }

    public void i(Dynamic dynamic) {
        this.f16624e.setX(dynamic);
        invalidate();
    }

    public void j(Dynamic dynamic) {
        this.f16624e.setY(dynamic);
        invalidate();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.horcrux.svg.VirtualView
    public void saveDefinition() {
    }
}
