package com.imagepicker;

import android.text.TextUtils;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.ViewProps;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class g {

    /* renamed from: a  reason: collision with root package name */
    int f17138a;

    /* renamed from: b  reason: collision with root package name */
    Boolean f17139b;

    /* renamed from: c  reason: collision with root package name */
    Boolean f17140c;

    /* renamed from: d  reason: collision with root package name */
    int f17141d;

    /* renamed from: e  reason: collision with root package name */
    int f17142e;

    /* renamed from: f  reason: collision with root package name */
    int f17143f;

    /* renamed from: g  reason: collision with root package name */
    int f17144g;

    /* renamed from: h  reason: collision with root package name */
    Boolean f17145h;

    /* renamed from: i  reason: collision with root package name */
    int f17146i;

    /* renamed from: j  reason: collision with root package name */
    Boolean f17147j;

    /* renamed from: k  reason: collision with root package name */
    Boolean f17148k;

    /* renamed from: l  reason: collision with root package name */
    String f17149l;

    /* JADX INFO: Access modifiers changed from: package-private */
    public g(ReadableMap readableMap) {
        this.f17141d = 1;
        Boolean bool = Boolean.FALSE;
        this.f17147j = bool;
        this.f17148k = bool;
        this.f17149l = readableMap.getString("mediaType");
        this.f17138a = readableMap.getInt("selectionLimit");
        this.f17139b = Boolean.valueOf(readableMap.getBoolean("includeBase64"));
        this.f17140c = Boolean.valueOf(readableMap.getBoolean("includeExtra"));
        String string = readableMap.getString("videoQuality");
        if (!TextUtils.isEmpty(string) && !string.toLowerCase().equals("high")) {
            this.f17141d = 0;
        }
        if (readableMap.getString("cameraType").equals("front")) {
            this.f17147j = Boolean.TRUE;
        }
        if (readableMap.hasKey("forceGetContent") && readableMap.getBoolean("forceGetContent")) {
            this.f17148k = Boolean.TRUE;
        }
        this.f17142e = (int) (readableMap.getDouble("quality") * 100.0d);
        this.f17144g = readableMap.getInt(ViewProps.MAX_HEIGHT);
        this.f17143f = readableMap.getInt(ViewProps.MAX_WIDTH);
        this.f17145h = Boolean.valueOf(readableMap.getBoolean("saveToPhotos"));
        this.f17146i = readableMap.getInt("durationLimit");
    }
}
