package com.imagepicker;

import android.text.TextUtils;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.ViewProps;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class g {

    /* renamed from: a  reason: collision with root package name */
    int f18147a;

    /* renamed from: b  reason: collision with root package name */
    Boolean f18148b;

    /* renamed from: c  reason: collision with root package name */
    Boolean f18149c;

    /* renamed from: d  reason: collision with root package name */
    int f18150d;

    /* renamed from: e  reason: collision with root package name */
    int f18151e;

    /* renamed from: f  reason: collision with root package name */
    int f18152f;

    /* renamed from: g  reason: collision with root package name */
    int f18153g;

    /* renamed from: h  reason: collision with root package name */
    Boolean f18154h;

    /* renamed from: i  reason: collision with root package name */
    int f18155i;

    /* renamed from: j  reason: collision with root package name */
    Boolean f18156j;

    /* renamed from: k  reason: collision with root package name */
    Boolean f18157k;

    /* renamed from: l  reason: collision with root package name */
    String f18158l;

    /* JADX INFO: Access modifiers changed from: package-private */
    public g(ReadableMap readableMap) {
        this.f18150d = 1;
        Boolean bool = Boolean.FALSE;
        this.f18156j = bool;
        this.f18157k = bool;
        this.f18158l = readableMap.getString("mediaType");
        this.f18147a = readableMap.getInt("selectionLimit");
        this.f18148b = Boolean.valueOf(readableMap.getBoolean("includeBase64"));
        this.f18149c = Boolean.valueOf(readableMap.getBoolean("includeExtra"));
        String string = readableMap.getString("videoQuality");
        if (!TextUtils.isEmpty(string) && !string.toLowerCase().equals("high")) {
            this.f18150d = 0;
        }
        if (readableMap.getString("cameraType").equals("front")) {
            this.f18156j = Boolean.TRUE;
        }
        if (readableMap.hasKey("forceGetContent") && readableMap.getBoolean("forceGetContent")) {
            this.f18157k = Boolean.TRUE;
        }
        this.f18151e = (int) (readableMap.getDouble("quality") * 100.0d);
        this.f18153g = readableMap.getInt(ViewProps.MAX_HEIGHT);
        this.f18152f = readableMap.getInt(ViewProps.MAX_WIDTH);
        this.f18154h = Boolean.valueOf(readableMap.getBoolean("saveToPhotos"));
        this.f18155i = readableMap.getInt("durationLimit");
    }
}
