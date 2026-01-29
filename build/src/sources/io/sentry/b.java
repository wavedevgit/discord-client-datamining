package io.sentry;

import java.util.concurrent.Callable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private byte[] f29742a;

    /* renamed from: b  reason: collision with root package name */
    private final w1 f29743b;

    /* renamed from: c  reason: collision with root package name */
    private final Callable f29744c;

    /* renamed from: d  reason: collision with root package name */
    private String f29745d;

    /* renamed from: e  reason: collision with root package name */
    private final String f29746e;

    /* renamed from: f  reason: collision with root package name */
    private final String f29747f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f29748g;

    /* renamed from: h  reason: collision with root package name */
    private String f29749h;

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
        return this.f29749h;
    }

    public Callable e() {
        return this.f29744c;
    }

    public byte[] f() {
        return this.f29742a;
    }

    public String g() {
        return this.f29747f;
    }

    public String h() {
        return this.f29746e;
    }

    public String i() {
        return this.f29745d;
    }

    public w1 j() {
        return this.f29743b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean k() {
        return this.f29748g;
    }

    public b(byte[] bArr, String str, String str2, String str3, boolean z10) {
        this.f29742a = bArr;
        this.f29743b = null;
        this.f29744c = null;
        this.f29746e = str;
        this.f29747f = str2;
        this.f29749h = str3;
        this.f29748g = z10;
    }

    public b(w1 w1Var, String str, String str2, String str3, boolean z10) {
        this.f29742a = null;
        this.f29743b = w1Var;
        this.f29744c = null;
        this.f29746e = str;
        this.f29747f = str2;
        this.f29749h = str3;
        this.f29748g = z10;
    }

    public b(Callable callable, String str, String str2, String str3, boolean z10) {
        this.f29742a = null;
        this.f29743b = null;
        this.f29744c = callable;
        this.f29746e = str;
        this.f29747f = str2;
        this.f29749h = str3;
        this.f29748g = z10;
    }
}
