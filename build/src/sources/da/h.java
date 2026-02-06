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
    private ULocale f20326a;

    /* renamed from: b  reason: collision with root package name */
    private ULocale.Builder f20327b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f20328c;

    private h(ULocale uLocale) {
        this.f20327b = null;
        this.f20328c = false;
        this.f20326a = uLocale;
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
        if (this.f20328c) {
            try {
                this.f20326a = this.f20327b.build();
                this.f20328c = false;
            } catch (RuntimeException e10) {
                throw new f(e10.getMessage());
            }
        }
    }

    @Override // da.b
    public HashMap a() {
        l();
        HashMap hashMap = new HashMap();
        Iterator<String> keywords = this.f20326a.getKeywords();
        if (keywords != null) {
            while (keywords.hasNext()) {
                String next = keywords.next();
                hashMap.put(i.b(next), this.f20326a.getKeywordValue(next));
            }
        }
        return hashMap;
    }

    @Override // da.b
    public ArrayList b(String str) {
        l();
        String a10 = i.a(str);
        ArrayList arrayList = new ArrayList();
        String keywordValue = this.f20326a.getKeywordValue(a10);
        if (keywordValue != null && !keywordValue.isEmpty()) {
            Collections.addAll(arrayList, keywordValue.split("-|_"));
        }
        return arrayList;
    }

    @Override // da.b
    public b d() {
        l();
        return new h(this.f20326a);
    }

    @Override // da.b
    public String e() {
        return c().toLanguageTag();
    }

    @Override // da.b
    public void f(String str, ArrayList arrayList) {
        l();
        if (this.f20327b == null) {
            this.f20327b = new ULocale.Builder().setLocale(this.f20326a);
        }
        try {
            this.f20327b.setUnicodeLocaleKeyword(str, TextUtils.join("-", arrayList));
            this.f20328c = true;
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
        return this.f20326a;
    }

    @Override // da.b
    /* renamed from: n */
    public ULocale c() {
        l();
        ULocale.Builder builder = new ULocale.Builder();
        builder.setLocale(this.f20326a);
        builder.clearExtensions();
        return builder.build();
    }

    private h(String str) {
        this.f20326a = null;
        this.f20327b = null;
        this.f20328c = false;
        ULocale.Builder builder = new ULocale.Builder();
        this.f20327b = builder;
        try {
            builder.setLanguageTag(str);
            this.f20328c = true;
        } catch (RuntimeException e10) {
            throw new f(e10.getMessage());
        }
    }
}
