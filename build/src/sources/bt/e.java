package bt;

import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class e {

    /* renamed from: a  reason: collision with root package name */
    private final Integer f7222a;

    /* renamed from: b  reason: collision with root package name */
    private final String f7223b;

    public /* synthetic */ e(Integer num, String str, DefaultConstructorMarker defaultConstructorMarker) {
        this(num, str);
    }

    public abstract g a(Object obj, CharSequence charSequence, int i10, int i11);

    public Integer b() {
        return this.f7222a;
    }

    public final String c() {
        return this.f7223b;
    }

    private e(Integer num, String str) {
        this.f7222a = num;
        this.f7223b = str;
    }
}
