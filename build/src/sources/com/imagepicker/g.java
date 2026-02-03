package com.imagepicker;

import android.text.TextUtils;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.ViewProps;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class g {

    /* renamed from: a  reason: collision with root package name */
    int f17776a;

    /* renamed from: b  reason: collision with root package name */
    Boolean f17777b;

    /* renamed from: c  reason: collision with root package name */
    Boolean f17778c;

    /* renamed from: d  reason: collision with root package name */
    int f17779d;

    /* renamed from: e  reason: collision with root package name */
    int f17780e;

    /* renamed from: f  reason: collision with root package name */
    int f17781f;

    /* renamed from: g  reason: collision with root package name */
    int f17782g;

    /* renamed from: h  reason: collision with root package name */
    Boolean f17783h;

    /* renamed from: i  reason: collision with root package name */
    int f17784i;

    /* renamed from: j  reason: collision with root package name */
    Boolean f17785j;

    /* renamed from: k  reason: collision with root package name */
    Boolean f17786k;

    /* renamed from: l  reason: collision with root package name */
    String f17787l;

    /* JADX INFO: Access modifiers changed from: package-private */
    public g(ReadableMap readableMap) {
        this.f17779d = 1;
        Boolean bool = Boolean.FALSE;
        this.f17785j = bool;
        this.f17786k = bool;
        this.f17787l = readableMap.getString("mediaType");
        this.f17776a = readableMap.getInt("selectionLimit");
        this.f17777b = Boolean.valueOf(readableMap.getBoolean("includeBase64"));
        this.f17778c = Boolean.valueOf(readableMap.getBoolean("includeExtra"));
        String string = readableMap.getString("videoQuality");
        if (!TextUtils.isEmpty(string) && !string.toLowerCase().equals("high")) {
            this.f17779d = 0;
        }
        if (readableMap.getString("cameraType").equals("front")) {
            this.f17785j = Boolean.TRUE;
        }
        if (readableMap.hasKey("forceGetContent") && readableMap.getBoolean("forceGetContent")) {
            this.f17786k = Boolean.TRUE;
        }
        this.f17780e = (int) (readableMap.getDouble("quality") * 100.0d);
        this.f17782g = readableMap.getInt(ViewProps.MAX_HEIGHT);
        this.f17781f = readableMap.getInt(ViewProps.MAX_WIDTH);
        this.f17783h = Boolean.valueOf(readableMap.getBoolean("saveToPhotos"));
        this.f17784i = readableMap.getInt("durationLimit");
    }
}
