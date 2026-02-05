package com.google.firebase.installations;

import android.text.TextUtils;
import java.util.concurrent.TimeUnit;
import java.util.regex.Pattern;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i {

    /* renamed from: b  reason: collision with root package name */
    public static final long f16376b = TimeUnit.HOURS.toSeconds(1);

    /* renamed from: c  reason: collision with root package name */
    private static final Pattern f16377c = Pattern.compile("\\AA[\\w-]{38}\\z");

    /* renamed from: d  reason: collision with root package name */
    private static i f16378d;

    /* renamed from: a  reason: collision with root package name */
    private final ij.a f16379a;

    private i(ij.a aVar) {
        this.f16379a = aVar;
    }

    public static i c() {
        return d(ij.b.b());
    }

    public static i d(ij.a aVar) {
        if (f16378d == null) {
            f16378d = new i(aVar);
        }
        return f16378d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean g(String str) {
        return f16377c.matcher(str).matches();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean h(String str) {
        return str.contains(":");
    }

    public long a() {
        return this.f16379a.a();
    }

    public long b() {
        return TimeUnit.MILLISECONDS.toSeconds(a());
    }

    public long e() {
        return (long) (Math.random() * 1000.0d);
    }

    public boolean f(gj.d dVar) {
        if (TextUtils.isEmpty(dVar.b()) || dVar.h() + dVar.c() < b() + f16376b) {
            return true;
        }
        return false;
    }
}
