package io.sentry;

import java.util.concurrent.Callable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private byte[] f29639a;

    /* renamed from: b  reason: collision with root package name */
    private final w1 f29640b;

    /* renamed from: c  reason: collision with root package name */
    private final Callable f29641c;

    /* renamed from: d  reason: collision with root package name */
    private String f29642d;

    /* renamed from: e  reason: collision with root package name */
    private final String f29643e;

    /* renamed from: f  reason: collision with root package name */
    private final String f29644f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f29645g;

    /* renamed from: h  reason: collision with root package name */
    private String f29646h;

    public b(byte[] bArr, String str, String str2, boolean z10) {
        this(bArr, str, str2, "event.attachment", z10);
    }

    public static b a(Callable callable, String str, String str2, boolean z10) {
        return new b(callable, str, str2, "event.attachment", z10);
    }

    public static b b(byte[] bArr) {
        return new b(bArr, "thread-dump.txt", "text/plain", false);
    }

    public static b c(io.sentry.protocol.i0 i0Var) {
        return new b((w1) i0Var, "view-hierarchy.json", "application/json", "event.view_hierarchy", false);
    }

    public String d() {
        return this.f29646h;
    }

    public Callable e() {
        return this.f29641c;
    }

    public byte[] f() {
        return this.f29639a;
    }

    public String g() {
        return this.f29644f;
    }

    public String h() {
        return this.f29643e;
    }

    public String i() {
        return this.f29642d;
    }

    public w1 j() {
        return this.f29640b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean k() {
        return this.f29645g;
    }

    public b(byte[] bArr, String str, String str2, String str3, boolean z10) {
        this.f29639a = bArr;
        this.f29640b = null;
        this.f29641c = null;
        this.f29643e = str;
        this.f29644f = str2;
        this.f29646h = str3;
        this.f29645g = z10;
    }

    public b(w1 w1Var, String str, String str2, String str3, boolean z10) {
        this.f29639a = null;
        this.f29640b = w1Var;
        this.f29641c = null;
        this.f29643e = str;
        this.f29644f = str2;
        this.f29646h = str3;
        this.f29645g = z10;
    }

    public b(Callable callable, String str, String str2, String str3, boolean z10) {
        this.f29639a = null;
        this.f29640b = null;
        this.f29641c = callable;
        this.f29643e = str;
        this.f29644f = str2;
        this.f29646h = str3;
        this.f29645g = z10;
    }
}
