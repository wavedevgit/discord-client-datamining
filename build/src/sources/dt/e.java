package dt;

import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class e {

    /* renamed from: a  reason: collision with root package name */
    private final Integer f21138a;

    /* renamed from: b  reason: collision with root package name */
    private final String f21139b;

    public /* synthetic */ e(Integer num, String str, DefaultConstructorMarker defaultConstructorMarker) {
        this(num, str);
    }

    public abstract g a(Object obj, CharSequence charSequence, int i10, int i11);

    public Integer b() {
        return this.f21138a;
    }

    public final String c() {
        return this.f21139b;
    }

    private e(Integer num, String str) {
        this.f21138a = num;
        this.f21139b = str;
    }
}
