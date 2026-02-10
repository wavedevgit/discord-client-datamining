package mt;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class r implements l {

    /* renamed from: a  reason: collision with root package name */
    private final b0 f36631a;

    /* renamed from: b  reason: collision with root package name */
    private final List f36632b;

    /* renamed from: c  reason: collision with root package name */
    private final String f36633c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private final class a implements ot.a {
        public a() {
        }

        @Override // ot.a
        /* renamed from: d */
        public String c(Object obj, String newValue) {
            Intrinsics.checkNotNullParameter(newValue, "newValue");
            Integer num = (Integer) r.this.g().b().c(obj, Integer.valueOf(r.this.f36632b.indexOf(newValue) + r.this.g().g()));
            if (num != null) {
                r rVar = r.this;
                return (String) rVar.f36632b.get(num.intValue() - rVar.g().g());
            }
            return null;
        }

        @Override // ot.a
        public String getName() {
            return r.this.f36633c;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    /* synthetic */ class b extends FunctionReferenceImpl implements Function1 {
        b(Object obj) {
            super(1, obj, r.class, "getStringValue", "getStringValue(Ljava/lang/Object;)Ljava/lang/String;", 0);
        }

        @Override // kotlin.jvm.functions.Function1
        public final String invoke(Object obj) {
            return ((r) this.receiver).h(obj);
        }
    }

    public r(b0 field, List values, String name) {
        Intrinsics.checkNotNullParameter(field, "field");
        Intrinsics.checkNotNullParameter(values, "values");
        Intrinsics.checkNotNullParameter(name, "name");
        this.f36631a = field;
        this.f36632b = values;
        this.f36633c = name;
        if (values.size() == (field.f() - field.g()) + 1) {
            return;
        }
        throw new IllegalArgumentException(("The number of values (" + values.size() + ") in " + values + " does not match the range of the field (" + ((field.f() - field.g()) + 1) + ')').toString());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final String h(Object obj) {
        int intValue = ((Number) this.f36631a.b().b(obj)).intValue();
        String str = (String) CollectionsKt.q0(this.f36632b, intValue - this.f36631a.g());
        if (str == null) {
            return "The value " + intValue + " of " + this.f36631a.getName() + " does not have a corresponding string representation";
        }
        return str;
    }

    @Override // mt.l
    public nt.e a() {
        return new nt.i(new b(this));
    }

    @Override // mt.l
    public ot.q b() {
        a aVar = new a();
        return new ot.q(CollectionsKt.e(new ot.t(this.f36632b, aVar, "one of " + this.f36632b + " for " + this.f36633c)), CollectionsKt.l());
    }

    @Override // mt.l
    public /* bridge */ /* synthetic */ n c() {
        return this.f36631a;
    }

    public final b0 g() {
        return this.f36631a;
    }
}
