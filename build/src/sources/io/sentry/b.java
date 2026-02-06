package io.sentry;

import java.util.concurrent.Callable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private byte[] f27887a;

    /* renamed from: b  reason: collision with root package name */
    private final w1 f27888b;

    /* renamed from: c  reason: collision with root package name */
    private final Callable f27889c;

    /* renamed from: d  reason: collision with root package name */
    private String f27890d;

    /* renamed from: e  reason: collision with root package name */
    private final String f27891e;

    /* renamed from: f  reason: collision with root package name */
    private final String f27892f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f27893g;

    /* renamed from: h  reason: collision with root package name */
    private String f27894h;

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
        return this.f27894h;
    }

    public Callable e() {
        return this.f27889c;
    }

    public byte[] f() {
        return this.f27887a;
    }

    public String g() {
        return this.f27892f;
    }

    public String h() {
        return this.f27891e;
    }

    public String i() {
        return this.f27890d;
    }

    public w1 j() {
        return this.f27888b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean k() {
        return this.f27893g;
    }

    public b(byte[] bArr, String str, String str2, String str3, boolean z10) {
        this.f27887a = bArr;
        this.f27888b = null;
        this.f27889c = null;
        this.f27891e = str;
        this.f27892f = str2;
        this.f27894h = str3;
        this.f27893g = z10;
    }

    public b(w1 w1Var, String str, String str2, String str3, boolean z10) {
        this.f27887a = null;
        this.f27888b = w1Var;
        this.f27889c = null;
        this.f27891e = str;
        this.f27892f = str2;
        this.f27894h = str3;
        this.f27893g = z10;
    }

    public b(Callable callable, String str, String str2, String str3, boolean z10) {
        this.f27887a = null;
        this.f27888b = null;
        this.f27889c = callable;
        this.f27891e = str;
        this.f27892f = str2;
        this.f27894h = str3;
        this.f27893g = z10;
    }
}
