package com.google.firebase.installations;

import android.text.TextUtils;
import java.util.concurrent.TimeUnit;
import java.util.regex.Pattern;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i {

    /* renamed from: b  reason: collision with root package name */
    public static final long f16496b = TimeUnit.HOURS.toSeconds(1);

    /* renamed from: c  reason: collision with root package name */
    private static final Pattern f16497c = Pattern.compile("\\AA[\\w-]{38}\\z");

    /* renamed from: d  reason: collision with root package name */
    private static i f16498d;

    /* renamed from: a  reason: collision with root package name */
    private final kj.a f16499a;

    private i(kj.a aVar) {
        this.f16499a = aVar;
    }

    public static i c() {
        return d(kj.b.b());
    }

    public static i d(kj.a aVar) {
        if (f16498d == null) {
            f16498d = new i(aVar);
        }
        return f16498d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean g(String str) {
        return f16497c.matcher(str).matches();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean h(String str) {
        return str.contains(":");
    }

    public long a() {
        return this.f16499a.a();
    }

    public long b() {
        return TimeUnit.MILLISECONDS.toSeconds(a());
    }

    public long e() {
        return (long) (Math.random() * 1000.0d);
    }

    public boolean f(ij.d dVar) {
        if (TextUtils.isEmpty(dVar.b()) || dVar.h() + dVar.c() < b() + f16496b) {
            return true;
        }
        return false;
    }
}
