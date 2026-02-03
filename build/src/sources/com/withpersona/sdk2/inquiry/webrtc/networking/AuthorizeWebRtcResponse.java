package com.withpersona.sdk2.inquiry.webrtc.networking;

import com.discord.notifications.renderer.NotificationRenderer;
import com.squareup.moshi.g;
import com.squareup.moshi.i;
import kotlin.Metadata;
@i(generateAdapter = true)
@Metadata(d1 = {"\u0000\u0010\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0010\u000e\n\u0002\b\u000b\b\u0007\u0018\u00002\u00020\u0001B'\u0012\b\u0010\u0003\u001a\u0004\u0018\u00010\u0002\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0001\u0010\u0005\u001a\u0004\u0018\u00010\u0002¢\u0006\u0004\b\u0006\u0010\u0007R\u0019\u0010\u0003\u001a\u0004\u0018\u00010\u00028\u0006¢\u0006\f\n\u0004\b\b\u0010\t\u001a\u0004\b\n\u0010\u000bR\u0019\u0010\u0004\u001a\u0004\u0018\u00010\u00028\u0006¢\u0006\f\n\u0004\b\f\u0010\t\u001a\u0004\b\b\u0010\u000bR\u0019\u0010\u0005\u001a\u0004\u0018\u00010\u00028\u0006¢\u0006\f\n\u0004\b\n\u0010\t\u001a\u0004\b\f\u0010\u000b¨\u0006\r"}, d2 = {"Lcom/withpersona/sdk2/inquiry/webrtc/networking/AuthorizeWebRtcResponse;", "", "", NotificationRenderer.USERNAME, "credential", "serverUrl", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", "a", "Ljava/lang/String;", "c", "()Ljava/lang/String;", "b", "webrtc_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class AuthorizeWebRtcResponse {

    /* renamed from: a  reason: collision with root package name */
    private final String f19467a;

    /* renamed from: b  reason: collision with root package name */
    private final String f19468b;

    /* renamed from: c  reason: collision with root package name */
    private final String f19469c;

    public AuthorizeWebRtcResponse(String str, String str2, @g(name = "server_url") String str3) {
        this.f19467a = str;
        this.f19468b = str2;
        this.f19469c = str3;
    }

    public final String a() {
        return this.f19468b;
    }

    public final String b() {
        return this.f19469c;
    }

    public final String c() {
        return this.f19467a;
    }
}
