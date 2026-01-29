package da;

import android.icu.util.ULocale;
import android.text.TextUtils;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class h implements b {

    /* renamed from: a  reason: collision with root package name */
    private ULocale f21720a;

    /* renamed from: b  reason: collision with root package name */
    private ULocale.Builder f21721b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f21722c;

    private h(ULocale uLocale) {
        this.f21721b = null;
        this.f21722c = false;
        this.f21720a = uLocale;
    }

    public static b i() {
        return new h(ULocale.getDefault(ULocale.Category.FORMAT));
    }

    public static b j(String str) {
        return new h(str);
    }

    public static b k(ULocale uLocale) {
        return new h(uLocale);
    }

    private void l() {
        if (this.f21722c) {
            try {
                this.f21720a = this.f21721b.build();
                this.f21722c = false;
            } catch (RuntimeException e10) {
                throw new f(e10.getMessage());
            }
        }
    }

    @Override // da.b
    public HashMap a() {
        l();
        HashMap hashMap = new HashMap();
        Iterator<String> keywords = this.f21720a.getKeywords();
        if (keywords != null) {
            while (keywords.hasNext()) {
                String next = keywords.next();
                hashMap.put(i.b(next), this.f21720a.getKeywordValue(next));
            }
        }
        return hashMap;
    }

    @Override // da.b
    public ArrayList b(String str) {
        l();
        String a10 = i.a(str);
        ArrayList arrayList = new ArrayList();
        String keywordValue = this.f21720a.getKeywordValue(a10);
        if (keywordValue != null && !keywordValue.isEmpty()) {
            Collections.addAll(arrayList, keywordValue.split("-|_"));
        }
        return arrayList;
    }

    @Override // da.b
    public b d() {
        l();
        return new h(this.f21720a);
    }

    @Override // da.b
    public String e() {
        return c().toLanguageTag();
    }

    @Override // da.b
    public void f(String str, ArrayList arrayList) {
        l();
        if (this.f21721b == null) {
            this.f21721b = new ULocale.Builder().setLocale(this.f21720a);
        }
        try {
            this.f21721b.setUnicodeLocaleKeyword(str, TextUtils.join("-", arrayList));
            this.f21722c = true;
        } catch (RuntimeException e10) {
            throw new f(e10.getMessage());
        }
    }

    @Override // da.b
    public String g() {
        return h().toLanguageTag();
    }

    @Override // da.b
    /* renamed from: m */
    public ULocale h() {
        l();
        return this.f21720a;
    }

    @Override // da.b
    /* renamed from: n */
    public ULocale c() {
        l();
        ULocale.Builder builder = new ULocale.Builder();
        builder.setLocale(this.f21720a);
        builder.clearExtensions();
        return builder.build();
    }

    private h(String str) {
        this.f21720a = null;
        this.f21721b = null;
        this.f21722c = false;
        ULocale.Builder builder = new ULocale.Builder();
        this.f21721b = builder;
        try {
            builder.setLanguageTag(str);
            this.f21722c = true;
        } catch (RuntimeException e10) {
            throw new f(e10.getMessage());
        }
    }
}
