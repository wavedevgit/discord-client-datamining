package com.imagepicker;

import android.text.TextUtils;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.ViewProps;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class g {

    /* renamed from: a  reason: collision with root package name */
    int f18008a;

    /* renamed from: b  reason: collision with root package name */
    Boolean f18009b;

    /* renamed from: c  reason: collision with root package name */
    Boolean f18010c;

    /* renamed from: d  reason: collision with root package name */
    int f18011d;

    /* renamed from: e  reason: collision with root package name */
    int f18012e;

    /* renamed from: f  reason: collision with root package name */
    int f18013f;

    /* renamed from: g  reason: collision with root package name */
    int f18014g;

    /* renamed from: h  reason: collision with root package name */
    Boolean f18015h;

    /* renamed from: i  reason: collision with root package name */
    int f18016i;

    /* renamed from: j  reason: collision with root package name */
    Boolean f18017j;

    /* renamed from: k  reason: collision with root package name */
    Boolean f18018k;

    /* renamed from: l  reason: collision with root package name */
    String f18019l;

    /* JADX INFO: Access modifiers changed from: package-private */
    public g(ReadableMap readableMap) {
        this.f18011d = 1;
        Boolean bool = Boolean.FALSE;
        this.f18017j = bool;
        this.f18018k = bool;
        this.f18019l = readableMap.getString("mediaType");
        this.f18008a = readableMap.getInt("selectionLimit");
        this.f18009b = Boolean.valueOf(readableMap.getBoolean("includeBase64"));
        this.f18010c = Boolean.valueOf(readableMap.getBoolean("includeExtra"));
        String string = readableMap.getString("videoQuality");
        if (!TextUtils.isEmpty(string) && !string.toLowerCase().equals("high")) {
            this.f18011d = 0;
        }
        if (readableMap.getString("cameraType").equals("front")) {
            this.f18017j = Boolean.TRUE;
        }
        if (readableMap.hasKey("forceGetContent") && readableMap.getBoolean("forceGetContent")) {
            this.f18018k = Boolean.TRUE;
        }
        this.f18012e = (int) (readableMap.getDouble("quality") * 100.0d);
        this.f18014g = readableMap.getInt(ViewProps.MAX_HEIGHT);
        this.f18013f = readableMap.getInt(ViewProps.MAX_WIDTH);
        this.f18015h = Boolean.valueOf(readableMap.getBoolean("saveToPhotos"));
        this.f18016i = readableMap.getInt("durationLimit");
    }
}
