package us;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class r implements l {

    /* renamed from: a  reason: collision with root package name */
    private final b0 f50661a;

    /* renamed from: b  reason: collision with root package name */
    private final List f50662b;

    /* renamed from: c  reason: collision with root package name */
    private final String f50663c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private final class a implements ws.a {
        public a() {
        }

        @Override // ws.a
        /* renamed from: d */
        public String c(Object obj, String newValue) {
            Intrinsics.checkNotNullParameter(newValue, "newValue");
            Integer num = (Integer) r.this.g().b().c(obj, Integer.valueOf(r.this.f50662b.indexOf(newValue) + r.this.g().g()));
            if (num != null) {
                r rVar = r.this;
                return (String) rVar.f50662b.get(num.intValue() - rVar.g().g());
            }
            return null;
        }

        @Override // ws.a
        public String getName() {
            return r.this.f50663c;
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
        this.f50661a = field;
        this.f50662b = values;
        this.f50663c = name;
        if (values.size() == (field.f() - field.g()) + 1) {
            return;
        }
        throw new IllegalArgumentException(("The number of values (" + values.size() + ") in " + values + " does not match the range of the field (" + ((field.f() - field.g()) + 1) + ')').toString());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final String h(Object obj) {
        int intValue = ((Number) this.f50661a.b().b(obj)).intValue();
        String str = (String) CollectionsKt.q0(this.f50662b, intValue - this.f50661a.g());
        if (str == null) {
            return "The value " + intValue + " of " + this.f50661a.getName() + " does not have a corresponding string representation";
        }
        return str;
    }

    @Override // us.l
    public vs.e a() {
        return new vs.i(new b(this));
    }

    @Override // us.l
    public ws.q b() {
        a aVar = new a();
        return new ws.q(CollectionsKt.e(new ws.t(this.f50662b, aVar, "one of " + this.f50662b + " for " + this.f50663c)), CollectionsKt.l());
    }

    @Override // us.l
    public /* bridge */ /* synthetic */ n c() {
        return this.f50661a;
    }

    public final b0 g() {
        return this.f50661a;
    }
}
