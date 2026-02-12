package ea;

import android.icu.util.ULocale;
import android.text.TextUtils;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class h implements b {

    /* renamed from: a  reason: collision with root package name */
    private ULocale f22383a;

    /* renamed from: b  reason: collision with root package name */
    private ULocale.Builder f22384b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f22385c;

    private h(ULocale uLocale) {
        this.f22384b = null;
        this.f22385c = false;
        this.f22383a = uLocale;
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
        if (this.f22385c) {
            try {
                this.f22383a = this.f22384b.build();
                this.f22385c = false;
            } catch (RuntimeException e10) {
                throw new f(e10.getMessage());
            }
        }
    }

    @Override // ea.b
    public HashMap a() {
        l();
        HashMap hashMap = new HashMap();
        Iterator<String> keywords = this.f22383a.getKeywords();
        if (keywords != null) {
            while (keywords.hasNext()) {
                String next = keywords.next();
                hashMap.put(i.b(next), this.f22383a.getKeywordValue(next));
            }
        }
        return hashMap;
    }

    @Override // ea.b
    public ArrayList b(String str) {
        l();
        String a10 = i.a(str);
        ArrayList arrayList = new ArrayList();
        String keywordValue = this.f22383a.getKeywordValue(a10);
        if (keywordValue != null && !keywordValue.isEmpty()) {
            Collections.addAll(arrayList, keywordValue.split("-|_"));
        }
        return arrayList;
    }

    @Override // ea.b
    public b d() {
        l();
        return new h(this.f22383a);
    }

    @Override // ea.b
    public String e() {
        return c().toLanguageTag();
    }

    @Override // ea.b
    public void f(String str, ArrayList arrayList) {
        l();
        if (this.f22384b == null) {
            this.f22384b = new ULocale.Builder().setLocale(this.f22383a);
        }
        try {
            this.f22384b.setUnicodeLocaleKeyword(str, TextUtils.join("-", arrayList));
            this.f22385c = true;
        } catch (RuntimeException e10) {
            throw new f(e10.getMessage());
        }
    }

    @Override // ea.b
    public String g() {
        return h().toLanguageTag();
    }

    @Override // ea.b
    /* renamed from: m */
    public ULocale h() {
        l();
        return this.f22383a;
    }

    @Override // ea.b
    /* renamed from: n */
    public ULocale c() {
        l();
        ULocale.Builder builder = new ULocale.Builder();
        builder.setLocale(this.f22383a);
        builder.clearExtensions();
        return builder.build();
    }

    private h(String str) {
        this.f22383a = null;
        this.f22384b = null;
        this.f22385c = false;
        ULocale.Builder builder = new ULocale.Builder();
        this.f22384b = builder;
        try {
            builder.setLanguageTag(str);
            this.f22385c = true;
        } catch (RuntimeException e10) {
            throw new f(e10.getMessage());
        }
    }
}
