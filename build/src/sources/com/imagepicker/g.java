package com.imagepicker;

import android.text.TextUtils;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.ViewProps;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class g {

    /* renamed from: a  reason: collision with root package name */
    int f16744a;

    /* renamed from: b  reason: collision with root package name */
    Boolean f16745b;

    /* renamed from: c  reason: collision with root package name */
    Boolean f16746c;

    /* renamed from: d  reason: collision with root package name */
    int f16747d;

    /* renamed from: e  reason: collision with root package name */
    int f16748e;

    /* renamed from: f  reason: collision with root package name */
    int f16749f;

    /* renamed from: g  reason: collision with root package name */
    int f16750g;

    /* renamed from: h  reason: collision with root package name */
    Boolean f16751h;

    /* renamed from: i  reason: collision with root package name */
    int f16752i;

    /* renamed from: j  reason: collision with root package name */
    Boolean f16753j;

    /* renamed from: k  reason: collision with root package name */
    Boolean f16754k;

    /* renamed from: l  reason: collision with root package name */
    String f16755l;

    /* JADX INFO: Access modifiers changed from: package-private */
    public g(ReadableMap readableMap) {
        this.f16747d = 1;
        Boolean bool = Boolean.FALSE;
        this.f16753j = bool;
        this.f16754k = bool;
        this.f16755l = readableMap.getString("mediaType");
        this.f16744a = readableMap.getInt("selectionLimit");
        this.f16745b = Boolean.valueOf(readableMap.getBoolean("includeBase64"));
        this.f16746c = Boolean.valueOf(readableMap.getBoolean("includeExtra"));
        String string = readableMap.getString("videoQuality");
        if (!TextUtils.isEmpty(string) && !string.toLowerCase().equals("high")) {
            this.f16747d = 0;
        }
        if (readableMap.getString("cameraType").equals("front")) {
            this.f16753j = Boolean.TRUE;
        }
        if (readableMap.hasKey("forceGetContent") && readableMap.getBoolean("forceGetContent")) {
            this.f16754k = Boolean.TRUE;
        }
        this.f16748e = (int) (readableMap.getDouble("quality") * 100.0d);
        this.f16750g = readableMap.getInt(ViewProps.MAX_HEIGHT);
        this.f16749f = readableMap.getInt(ViewProps.MAX_WIDTH);
        this.f16751h = Boolean.valueOf(readableMap.getBoolean("saveToPhotos"));
        this.f16752i = readableMap.getInt("durationLimit");
    }
}
