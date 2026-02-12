package io.sentry;

import java.util.concurrent.Callable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private byte[] f29071a;

    /* renamed from: b  reason: collision with root package name */
    private final w1 f29072b;

    /* renamed from: c  reason: collision with root package name */
    private final Callable f29073c;

    /* renamed from: d  reason: collision with root package name */
    private String f29074d;

    /* renamed from: e  reason: collision with root package name */
    private final String f29075e;

    /* renamed from: f  reason: collision with root package name */
    private final String f29076f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f29077g;

    /* renamed from: h  reason: collision with root package name */
    private String f29078h;

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
        return this.f29078h;
    }

    public Callable e() {
        return this.f29073c;
    }

    public byte[] f() {
        return this.f29071a;
    }

    public String g() {
        return this.f29076f;
    }

    public String h() {
        return this.f29075e;
    }

    public String i() {
        return this.f29074d;
    }

    public w1 j() {
        return this.f29072b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean k() {
        return this.f29077g;
    }

    public b(byte[] bArr, String str, String str2, String str3, boolean z10) {
        this.f29071a = bArr;
        this.f29072b = null;
        this.f29073c = null;
        this.f29075e = str;
        this.f29076f = str2;
        this.f29078h = str3;
        this.f29077g = z10;
    }

    public b(w1 w1Var, String str, String str2, String str3, boolean z10) {
        this.f29071a = null;
        this.f29072b = w1Var;
        this.f29073c = null;
        this.f29075e = str;
        this.f29076f = str2;
        this.f29078h = str3;
        this.f29077g = z10;
    }

    public b(Callable callable, String str, String str2, String str3, boolean z10) {
        this.f29071a = null;
        this.f29072b = null;
        this.f29073c = callable;
        this.f29075e = str;
        this.f29076f = str2;
        this.f29078h = str3;
        this.f29077g = z10;
    }
}
