package com.google.firebase.installations;

import android.text.TextUtils;
import java.util.concurrent.TimeUnit;
import java.util.regex.Pattern;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i {

    /* renamed from: b  reason: collision with root package name */
    public static final long f15982b = TimeUnit.HOURS.toSeconds(1);

    /* renamed from: c  reason: collision with root package name */
    private static final Pattern f15983c = Pattern.compile("\\AA[\\w-]{38}\\z");

    /* renamed from: d  reason: collision with root package name */
    private static i f15984d;

    /* renamed from: a  reason: collision with root package name */
    private final fj.a f15985a;

    private i(fj.a aVar) {
        this.f15985a = aVar;
    }

    public static i c() {
        return d(fj.b.b());
    }

    public static i d(fj.a aVar) {
        if (f15984d == null) {
            f15984d = new i(aVar);
        }
        return f15984d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean g(String str) {
        return f15983c.matcher(str).matches();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean h(String str) {
        return str.contains(":");
    }

    public long a() {
        return this.f15985a.a();
    }

    public long b() {
        return TimeUnit.MILLISECONDS.toSeconds(a());
    }

    public long e() {
        return (long) (Math.random() * 1000.0d);
    }

    public boolean f(dj.d dVar) {
        if (TextUtils.isEmpty(dVar.b()) || dVar.h() + dVar.c() < b() + f15982b) {
            return true;
        }
        return false;
    }
}
