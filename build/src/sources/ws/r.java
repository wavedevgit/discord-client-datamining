package ws;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class r implements l {

    /* renamed from: a  reason: collision with root package name */
    private final b0 f52720a;

    /* renamed from: b  reason: collision with root package name */
    private final List f52721b;

    /* renamed from: c  reason: collision with root package name */
    private final String f52722c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private final class a implements ys.a {
        public a() {
        }

        @Override // ys.a
        /* renamed from: d */
        public String c(Object obj, String newValue) {
            Intrinsics.checkNotNullParameter(newValue, "newValue");
            Integer num = (Integer) r.this.g().b().c(obj, Integer.valueOf(r.this.f52721b.indexOf(newValue) + r.this.g().g()));
            if (num != null) {
                r rVar = r.this;
                return (String) rVar.f52721b.get(num.intValue() - rVar.g().g());
            }
            return null;
        }

        @Override // ys.a
        public String getName() {
            return r.this.f52722c;
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
        this.f52720a = field;
        this.f52721b = values;
        this.f52722c = name;
        if (values.size() == (field.f() - field.g()) + 1) {
            return;
        }
        throw new IllegalArgumentException(("The number of values (" + values.size() + ") in " + values + " does not match the range of the field (" + ((field.f() - field.g()) + 1) + ')').toString());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final String h(Object obj) {
        int intValue = ((Number) this.f52720a.b().b(obj)).intValue();
        String str = (String) CollectionsKt.q0(this.f52721b, intValue - this.f52720a.g());
        if (str == null) {
            return "The value " + intValue + " of " + this.f52720a.getName() + " does not have a corresponding string representation";
        }
        return str;
    }

    @Override // ws.l
    public xs.e a() {
        return new xs.i(new b(this));
    }

    @Override // ws.l
    public ys.q b() {
        a aVar = new a();
        return new ys.q(CollectionsKt.e(new ys.t(this.f52721b, aVar, "one of " + this.f52721b + " for " + this.f52722c)), CollectionsKt.l());
    }

    @Override // ws.l
    public /* bridge */ /* synthetic */ n c() {
        return this.f52720a;
    }

    public final b0 g() {
        return this.f52720a;
    }
}
