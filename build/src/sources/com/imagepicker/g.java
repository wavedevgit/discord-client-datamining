package com.imagepicker;

import android.text.TextUtils;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.ViewProps;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class g {

    /* renamed from: a  reason: collision with root package name */
    int f18007a;

    /* renamed from: b  reason: collision with root package name */
    Boolean f18008b;

    /* renamed from: c  reason: collision with root package name */
    Boolean f18009c;

    /* renamed from: d  reason: collision with root package name */
    int f18010d;

    /* renamed from: e  reason: collision with root package name */
    int f18011e;

    /* renamed from: f  reason: collision with root package name */
    int f18012f;

    /* renamed from: g  reason: collision with root package name */
    int f18013g;

    /* renamed from: h  reason: collision with root package name */
    Boolean f18014h;

    /* renamed from: i  reason: collision with root package name */
    int f18015i;

    /* renamed from: j  reason: collision with root package name */
    Boolean f18016j;

    /* renamed from: k  reason: collision with root package name */
    Boolean f18017k;

    /* renamed from: l  reason: collision with root package name */
    String f18018l;

    /* JADX INFO: Access modifiers changed from: package-private */
    public g(ReadableMap readableMap) {
        this.f18010d = 1;
        Boolean bool = Boolean.FALSE;
        this.f18016j = bool;
        this.f18017k = bool;
        this.f18018l = readableMap.getString("mediaType");
        this.f18007a = readableMap.getInt("selectionLimit");
        this.f18008b = Boolean.valueOf(readableMap.getBoolean("includeBase64"));
        this.f18009c = Boolean.valueOf(readableMap.getBoolean("includeExtra"));
        String string = readableMap.getString("videoQuality");
        if (!TextUtils.isEmpty(string) && !string.toLowerCase().equals("high")) {
            this.f18010d = 0;
        }
        if (readableMap.getString("cameraType").equals("front")) {
            this.f18016j = Boolean.TRUE;
        }
        if (readableMap.hasKey("forceGetContent") && readableMap.getBoolean("forceGetContent")) {
            this.f18017k = Boolean.TRUE;
        }
        this.f18011e = (int) (readableMap.getDouble("quality") * 100.0d);
        this.f18013g = readableMap.getInt(ViewProps.MAX_HEIGHT);
        this.f18012f = readableMap.getInt(ViewProps.MAX_WIDTH);
        this.f18014h = Boolean.valueOf(readableMap.getBoolean("saveToPhotos"));
        this.f18015i = readableMap.getInt("durationLimit");
    }
}
