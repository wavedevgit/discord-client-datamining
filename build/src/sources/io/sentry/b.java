package io.sentry;

import java.util.concurrent.Callable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private byte[] f28135a;

    /* renamed from: b  reason: collision with root package name */
    private final w1 f28136b;

    /* renamed from: c  reason: collision with root package name */
    private final Callable f28137c;

    /* renamed from: d  reason: collision with root package name */
    private String f28138d;

    /* renamed from: e  reason: collision with root package name */
    private final String f28139e;

    /* renamed from: f  reason: collision with root package name */
    private final String f28140f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f28141g;

    /* renamed from: h  reason: collision with root package name */
    private String f28142h;

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
        return this.f28142h;
    }

    public Callable e() {
        return this.f28137c;
    }

    public byte[] f() {
        return this.f28135a;
    }

    public String g() {
        return this.f28140f;
    }

    public String h() {
        return this.f28139e;
    }

    public String i() {
        return this.f28138d;
    }

    public w1 j() {
        return this.f28136b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean k() {
        return this.f28141g;
    }

    public b(byte[] bArr, String str, String str2, String str3, boolean z10) {
        this.f28135a = bArr;
        this.f28136b = null;
        this.f28137c = null;
        this.f28139e = str;
        this.f28140f = str2;
        this.f28142h = str3;
        this.f28141g = z10;
    }

    public b(w1 w1Var, String str, String str2, String str3, boolean z10) {
        this.f28135a = null;
        this.f28136b = w1Var;
        this.f28137c = null;
        this.f28139e = str;
        this.f28140f = str2;
        this.f28142h = str3;
        this.f28141g = z10;
    }

    public b(Callable callable, String str, String str2, String str3, boolean z10) {
        this.f28135a = null;
        this.f28136b = null;
        this.f28137c = callable;
        this.f28139e = str;
        this.f28140f = str2;
        this.f28142h = str3;
        this.f28141g = z10;
    }
}
