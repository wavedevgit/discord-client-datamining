package com.imagepicker;

import android.text.TextUtils;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.ViewProps;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class g {

    /* renamed from: a  reason: collision with root package name */
    int f17118a;

    /* renamed from: b  reason: collision with root package name */
    Boolean f17119b;

    /* renamed from: c  reason: collision with root package name */
    Boolean f17120c;

    /* renamed from: d  reason: collision with root package name */
    int f17121d;

    /* renamed from: e  reason: collision with root package name */
    int f17122e;

    /* renamed from: f  reason: collision with root package name */
    int f17123f;

    /* renamed from: g  reason: collision with root package name */
    int f17124g;

    /* renamed from: h  reason: collision with root package name */
    Boolean f17125h;

    /* renamed from: i  reason: collision with root package name */
    int f17126i;

    /* renamed from: j  reason: collision with root package name */
    Boolean f17127j;

    /* renamed from: k  reason: collision with root package name */
    Boolean f17128k;

    /* renamed from: l  reason: collision with root package name */
    String f17129l;

    /* JADX INFO: Access modifiers changed from: package-private */
    public g(ReadableMap readableMap) {
        this.f17121d = 1;
        Boolean bool = Boolean.FALSE;
        this.f17127j = bool;
        this.f17128k = bool;
        this.f17129l = readableMap.getString("mediaType");
        this.f17118a = readableMap.getInt("selectionLimit");
        this.f17119b = Boolean.valueOf(readableMap.getBoolean("includeBase64"));
        this.f17120c = Boolean.valueOf(readableMap.getBoolean("includeExtra"));
        String string = readableMap.getString("videoQuality");
        if (!TextUtils.isEmpty(string) && !string.toLowerCase().equals("high")) {
            this.f17121d = 0;
        }
        if (readableMap.getString("cameraType").equals("front")) {
            this.f17127j = Boolean.TRUE;
        }
        if (readableMap.hasKey("forceGetContent") && readableMap.getBoolean("forceGetContent")) {
            this.f17128k = Boolean.TRUE;
        }
        this.f17122e = (int) (readableMap.getDouble("quality") * 100.0d);
        this.f17124g = readableMap.getInt(ViewProps.MAX_HEIGHT);
        this.f17123f = readableMap.getInt(ViewProps.MAX_WIDTH);
        this.f17125h = Boolean.valueOf(readableMap.getBoolean("saveToPhotos"));
        this.f17126i = readableMap.getInt("durationLimit");
    }
}
