package com.google.android.datatransport.cct;

import java.nio.charset.Charset;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
import java.util.regex.Pattern;
import zb.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a implements g {

    /* renamed from: c  reason: collision with root package name */
    static final String f12633c;

    /* renamed from: d  reason: collision with root package name */
    static final String f12634d;

    /* renamed from: e  reason: collision with root package name */
    private static final String f12635e;

    /* renamed from: f  reason: collision with root package name */
    private static final Set f12636f;

    /* renamed from: g  reason: collision with root package name */
    public static final a f12637g;

    /* renamed from: h  reason: collision with root package name */
    public static final a f12638h;

    /* renamed from: a  reason: collision with root package name */
    private final String f12639a;

    /* renamed from: b  reason: collision with root package name */
    private final String f12640b;

    static {
        String a10 = e.a("hts/frbslgiggolai.o/0clgbthfra=snpoo", "tp:/ieaeogn.ogepscmvc/o/ac?omtjo_rt3");
        f12633c = a10;
        String a11 = e.a("hts/frbslgigp.ogepscmv/ieo/eaybtho", "tp:/ieaeogn-agolai.o/1frlglgc/aclg");
        f12634d = a11;
        String a12 = e.a("AzSCki82AwsLzKd5O8zo", "IayckHiZRO1EFl1aGoK");
        f12635e = a12;
        f12636f = Collections.unmodifiableSet(new HashSet(Arrays.asList(xb.c.b("proto"), xb.c.b("json"))));
        f12637g = new a(a10, null);
        f12638h = new a(a11, a12);
    }

    public a(String str, String str2) {
        this.f12639a = str;
        this.f12640b = str2;
    }

    public static a c(byte[] bArr) {
        String str = new String(bArr, Charset.forName("UTF-8"));
        if (str.startsWith("1$")) {
            String[] split = str.substring(2).split(Pattern.quote("\\"), 2);
            if (split.length == 2) {
                String str2 = split[0];
                if (!str2.isEmpty()) {
                    String str3 = split[1];
                    if (str3.isEmpty()) {
                        str3 = null;
                    }
                    return new a(str2, str3);
                }
                throw new IllegalArgumentException("Missing endpoint in CCTDestination extras");
            }
            throw new IllegalArgumentException("Extra is not a valid encoded LegacyFlgDestination");
        }
        throw new IllegalArgumentException("Version marker missing from extras");
    }

    @Override // zb.g
    public Set a() {
        return f12636f;
    }

    public byte[] b() {
        String str = this.f12640b;
        if (str == null && this.f12639a == null) {
            return null;
        }
        String str2 = this.f12639a;
        if (str == null) {
            str = "";
        }
        return String.format("%s%s%s%s", "1$", str2, "\\", str).getBytes(Charset.forName("UTF-8"));
    }

    public String d() {
        return this.f12640b;
    }

    public String e() {
        return this.f12639a;
    }

    @Override // zb.f
    public byte[] getExtras() {
        return b();
    }

    @Override // zb.f
    public String getName() {
        return "cct";
    }
}
