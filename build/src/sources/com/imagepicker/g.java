package com.imagepicker;

import android.text.TextUtils;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.ViewProps;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class g {

    /* renamed from: a  reason: collision with root package name */
    int f17258a;

    /* renamed from: b  reason: collision with root package name */
    Boolean f17259b;

    /* renamed from: c  reason: collision with root package name */
    Boolean f17260c;

    /* renamed from: d  reason: collision with root package name */
    int f17261d;

    /* renamed from: e  reason: collision with root package name */
    int f17262e;

    /* renamed from: f  reason: collision with root package name */
    int f17263f;

    /* renamed from: g  reason: collision with root package name */
    int f17264g;

    /* renamed from: h  reason: collision with root package name */
    Boolean f17265h;

    /* renamed from: i  reason: collision with root package name */
    int f17266i;

    /* renamed from: j  reason: collision with root package name */
    Boolean f17267j;

    /* renamed from: k  reason: collision with root package name */
    Boolean f17268k;

    /* renamed from: l  reason: collision with root package name */
    String f17269l;

    /* JADX INFO: Access modifiers changed from: package-private */
    public g(ReadableMap readableMap) {
        this.f17261d = 1;
        Boolean bool = Boolean.FALSE;
        this.f17267j = bool;
        this.f17268k = bool;
        this.f17269l = readableMap.getString("mediaType");
        this.f17258a = readableMap.getInt("selectionLimit");
        this.f17259b = Boolean.valueOf(readableMap.getBoolean("includeBase64"));
        this.f17260c = Boolean.valueOf(readableMap.getBoolean("includeExtra"));
        String string = readableMap.getString("videoQuality");
        if (!TextUtils.isEmpty(string) && !string.toLowerCase().equals("high")) {
            this.f17261d = 0;
        }
        if (readableMap.getString("cameraType").equals("front")) {
            this.f17267j = Boolean.TRUE;
        }
        if (readableMap.hasKey("forceGetContent") && readableMap.getBoolean("forceGetContent")) {
            this.f17268k = Boolean.TRUE;
        }
        this.f17262e = (int) (readableMap.getDouble("quality") * 100.0d);
        this.f17264g = readableMap.getInt(ViewProps.MAX_HEIGHT);
        this.f17263f = readableMap.getInt(ViewProps.MAX_WIDTH);
        this.f17265h = Boolean.valueOf(readableMap.getBoolean("saveToPhotos"));
        this.f17266i = readableMap.getInt("durationLimit");
    }
}
