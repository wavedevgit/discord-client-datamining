package ws;

import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class e {

    /* renamed from: a  reason: collision with root package name */
    private final Integer f52991a;

    /* renamed from: b  reason: collision with root package name */
    private final String f52992b;

    public /* synthetic */ e(Integer num, String str, DefaultConstructorMarker defaultConstructorMarker) {
        this(num, str);
    }

    public abstract g a(Object obj, CharSequence charSequence, int i10, int i11);

    public Integer b() {
        return this.f52991a;
    }

    public final String c() {
        return this.f52992b;
    }

    private e(Integer num, String str) {
        this.f52991a = num;
        this.f52992b = str;
    }
}
