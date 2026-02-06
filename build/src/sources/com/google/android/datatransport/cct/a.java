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
    static final String f11514c;

    /* renamed from: d  reason: collision with root package name */
    static final String f11515d;

    /* renamed from: e  reason: collision with root package name */
    private static final String f11516e;

    /* renamed from: f  reason: collision with root package name */
    private static final Set f11517f;

    /* renamed from: g  reason: collision with root package name */
    public static final a f11518g;

    /* renamed from: h  reason: collision with root package name */
    public static final a f11519h;

    /* renamed from: a  reason: collision with root package name */
    private final String f11520a;

    /* renamed from: b  reason: collision with root package name */
    private final String f11521b;

    static {
        String a10 = e.a("hts/frbslgiggolai.o/0clgbthfra=snpoo", "tp:/ieaeogn.ogepscmvc/o/ac?omtjo_rt3");
        f11514c = a10;
        String a11 = e.a("hts/frbslgigp.ogepscmv/ieo/eaybtho", "tp:/ieaeogn-agolai.o/1frlglgc/aclg");
        f11515d = a11;
        String a12 = e.a("AzSCki82AwsLzKd5O8zo", "IayckHiZRO1EFl1aGoK");
        f11516e = a12;
        f11517f = Collections.unmodifiableSet(new HashSet(Arrays.asList(xb.c.b("proto"), xb.c.b("json"))));
        f11518g = new a(a10, null);
        f11519h = new a(a11, a12);
    }

    public a(String str, String str2) {
        this.f11520a = str;
        this.f11521b = str2;
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
        return f11517f;
    }

    public byte[] b() {
        String str = this.f11521b;
        if (str == null && this.f11520a == null) {
            return null;
        }
        String str2 = this.f11520a;
        if (str == null) {
            str = "";
        }
        return String.format("%s%s%s%s", "1$", str2, "\\", str).getBytes(Charset.forName("UTF-8"));
    }

    public String d() {
        return this.f11521b;
    }

    public String e() {
        return this.f11520a;
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
