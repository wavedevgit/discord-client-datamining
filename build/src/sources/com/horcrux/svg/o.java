package com.horcrux.svg;

import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Paint;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReadableArray;
import java.util.HashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class o extends q {

    /* renamed from: i  reason: collision with root package name */
    private ReadableArray f16997i;

    public o(ReactContext reactContext) {
        super(reactContext);
    }

    @Override // com.horcrux.svg.q
    public Bitmap c(HashMap hashMap, Bitmap bitmap) {
        Bitmap bitmap2;
        Bitmap createBitmap = Bitmap.createBitmap(bitmap.getWidth(), bitmap.getHeight(), Bitmap.Config.ARGB_8888);
        Canvas canvas = new Canvas(createBitmap);
        int size = this.f16997i.size();
        for (int i10 = 0; i10 < size; i10++) {
            String string = this.f16997i.getString(i10);
            if (string.isEmpty()) {
                bitmap2 = bitmap;
            } else {
                bitmap2 = (Bitmap) hashMap.get(string);
            }
            if (bitmap2 != null) {
                canvas.drawBitmap(bitmap2, 0.0f, 0.0f, new Paint());
            }
        }
        return createBitmap;
    }

    public void k(ReadableArray readableArray) {
        this.f16997i = readableArray;
        invalidate();
    }
}
