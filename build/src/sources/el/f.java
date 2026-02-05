package el;

import com.facebook.react.bridge.Dynamic;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class f extends k {

    /* renamed from: b  reason: collision with root package name */
    private String f21633b;

    public f() {
        super(e());
        this.f21633b = d();
    }

    private static String d() {
        return Locale.getDefault().toLanguageTag().replace('-', '_');
    }

    private static Locale e() {
        return com.henninghall.date_picker.h.f(d());
    }

    public String f() {
        return this.f21633b;
    }

    @Override // el.k
    /* renamed from: g */
    public Locale c(Dynamic dynamic) {
        String replace = dynamic.asString().replace('-', '_');
        this.f21633b = replace;
        return com.henninghall.date_picker.h.f(replace);
    }
}
