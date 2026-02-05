package com.google.android.exoplayer2.upstream.cache;

import java.io.File;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class j extends me.c {

    /* renamed from: r  reason: collision with root package name */
    private static final Pattern f13441r = Pattern.compile("^(.+)\\.(\\d+)\\.(\\d+)\\.v1\\.exo$", 32);

    /* renamed from: s  reason: collision with root package name */
    private static final Pattern f13442s = Pattern.compile("^(.+)\\.(\\d+)\\.(\\d+)\\.v2\\.exo$", 32);

    /* renamed from: t  reason: collision with root package name */
    private static final Pattern f13443t = Pattern.compile("^(\\d+)\\.(\\d+)\\.(\\d+)\\.v3\\.exo$", 32);

    private j(String str, long j10, long j11, long j12, File file) {
        super(str, j10, j11, j12, file);
    }

    public static j g(File file, long j10, long j11, h hVar) {
        String k10;
        long j12;
        String name = file.getName();
        if (!name.endsWith(".v3.exo")) {
            file = m(file, hVar);
            if (file == null) {
                return null;
            }
            name = file.getName();
        }
        File file2 = file;
        Matcher matcher = f13443t.matcher(name);
        if (!matcher.matches() || (k10 = hVar.k(Integer.parseInt((String) ne.a.e(matcher.group(1))))) == null) {
            return null;
        }
        if (j10 == -1) {
            j10 = file2.length();
        }
        long j13 = j10;
        if (j13 == 0) {
            return null;
        }
        long parseLong = Long.parseLong((String) ne.a.e(matcher.group(2)));
        if (j11 == -9223372036854775807L) {
            j12 = Long.parseLong((String) ne.a.e(matcher.group(3)));
        } else {
            j12 = j11;
        }
        return new j(k10, parseLong, j13, j12, file2);
    }

    public static j h(File file, long j10, h hVar) {
        return g(file, j10, -9223372036854775807L, hVar);
    }

    public static j i(String str, long j10, long j11) {
        return new j(str, j10, j11, -9223372036854775807L, null);
    }

    public static j k(String str, long j10) {
        return new j(str, j10, -1L, -9223372036854775807L, null);
    }

    public static File l(File file, int i10, long j10, long j11) {
        return new File(file, i10 + "." + j10 + "." + j11 + ".v3.exo");
    }

    private static File m(File file, h hVar) {
        String str;
        String name = file.getName();
        Matcher matcher = f13442s.matcher(name);
        if (matcher.matches()) {
            str = w0.o1((String) ne.a.e(matcher.group(1)));
        } else {
            matcher = f13441r.matcher(name);
            if (matcher.matches()) {
                str = (String) ne.a.e(matcher.group(1));
            } else {
                str = null;
            }
        }
        if (str == null) {
            return null;
        }
        File l10 = l((File) ne.a.i(file.getParentFile()), hVar.f(str), Long.parseLong((String) ne.a.e(matcher.group(2))), Long.parseLong((String) ne.a.e(matcher.group(3))));
        if (!file.renameTo(l10)) {
            return null;
        }
        return l10;
    }

    public j f(File file, long j10) {
        ne.a.g(this.f37487o);
        return new j(this.f37484d, this.f37485e, this.f37486i, j10, file);
    }
}
