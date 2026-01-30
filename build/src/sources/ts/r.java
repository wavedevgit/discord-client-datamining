package ts;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class r implements l {

    /* renamed from: a  reason: collision with root package name */
    private final b0 f49903a;

    /* renamed from: b  reason: collision with root package name */
    private final List f49904b;

    /* renamed from: c  reason: collision with root package name */
    private final String f49905c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private final class a implements vs.a {
        public a() {
        }

        @Override // vs.a
        /* renamed from: d */
        public String c(Object obj, String newValue) {
            Intrinsics.checkNotNullParameter(newValue, "newValue");
            Integer num = (Integer) r.this.g().b().c(obj, Integer.valueOf(r.this.f49904b.indexOf(newValue) + r.this.g().g()));
            if (num != null) {
                r rVar = r.this;
                return (String) rVar.f49904b.get(num.intValue() - rVar.g().g());
            }
            return null;
        }

        @Override // vs.a
        public String getName() {
            return r.this.f49905c;
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
        this.f49903a = field;
        this.f49904b = values;
        this.f49905c = name;
        if (values.size() == (field.f() - field.g()) + 1) {
            return;
        }
        throw new IllegalArgumentException(("The number of values (" + values.size() + ") in " + values + " does not match the range of the field (" + ((field.f() - field.g()) + 1) + ')').toString());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final String h(Object obj) {
        int intValue = ((Number) this.f49903a.b().b(obj)).intValue();
        String str = (String) CollectionsKt.q0(this.f49904b, intValue - this.f49903a.g());
        if (str == null) {
            return "The value " + intValue + " of " + this.f49903a.getName() + " does not have a corresponding string representation";
        }
        return str;
    }

    @Override // ts.l
    public us.e a() {
        return new us.i(new b(this));
    }

    @Override // ts.l
    public vs.q b() {
        a aVar = new a();
        return new vs.q(CollectionsKt.e(new vs.t(this.f49904b, aVar, "one of " + this.f49904b + " for " + this.f49905c)), CollectionsKt.l());
    }

    @Override // ts.l
    public /* bridge */ /* synthetic */ n c() {
        return this.f49903a;
    }

    public final b0 g() {
        return this.f49903a;
    }
}
