package jl;

import com.facebook.react.bridge.Dynamic;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class f extends k {

    /* renamed from: b  reason: collision with root package name */
    private String f31185b;

    public f() {
        super(e());
        this.f31185b = d();
    }

    private static String d() {
        return Locale.getDefault().toLanguageTag().replace('-', '_');
    }

    private static Locale e() {
        return com.henninghall.date_picker.h.f(d());
    }

    public String f() {
        return this.f31185b;
    }

    @Override // jl.k
    /* renamed from: g */
    public Locale c(Dynamic dynamic) {
        String replace = dynamic.asString().replace('-', '_');
        this.f31185b = replace;
        return com.henninghall.date_picker.h.f(replace);
    }
}
