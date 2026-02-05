package io.sentry;

import java.util.concurrent.Callable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private byte[] f28743a;

    /* renamed from: b  reason: collision with root package name */
    private final w1 f28744b;

    /* renamed from: c  reason: collision with root package name */
    private final Callable f28745c;

    /* renamed from: d  reason: collision with root package name */
    private String f28746d;

    /* renamed from: e  reason: collision with root package name */
    private final String f28747e;

    /* renamed from: f  reason: collision with root package name */
    private final String f28748f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f28749g;

    /* renamed from: h  reason: collision with root package name */
    private String f28750h;

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
        return this.f28750h;
    }

    public Callable e() {
        return this.f28745c;
    }

    public byte[] f() {
        return this.f28743a;
    }

    public String g() {
        return this.f28748f;
    }

    public String h() {
        return this.f28747e;
    }

    public String i() {
        return this.f28746d;
    }

    public w1 j() {
        return this.f28744b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean k() {
        return this.f28749g;
    }

    public b(byte[] bArr, String str, String str2, String str3, boolean z10) {
        this.f28743a = bArr;
        this.f28744b = null;
        this.f28745c = null;
        this.f28747e = str;
        this.f28748f = str2;
        this.f28750h = str3;
        this.f28749g = z10;
    }

    public b(w1 w1Var, String str, String str2, String str3, boolean z10) {
        this.f28743a = null;
        this.f28744b = w1Var;
        this.f28745c = null;
        this.f28747e = str;
        this.f28748f = str2;
        this.f28750h = str3;
        this.f28749g = z10;
    }

    public b(Callable callable, String str, String str2, String str3, boolean z10) {
        this.f28743a = null;
        this.f28744b = null;
        this.f28745c = callable;
        this.f28747e = str;
        this.f28748f = str2;
        this.f28750h = str3;
        this.f28749g = z10;
    }
}
