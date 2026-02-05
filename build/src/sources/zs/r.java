package zs;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class r implements l {

    /* renamed from: a  reason: collision with root package name */
    private final b0 f56249a;

    /* renamed from: b  reason: collision with root package name */
    private final List f56250b;

    /* renamed from: c  reason: collision with root package name */
    private final String f56251c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private final class a implements bt.a {
        public a() {
        }

        @Override // bt.a
        /* renamed from: d */
        public String c(Object obj, String newValue) {
            Intrinsics.checkNotNullParameter(newValue, "newValue");
            Integer num = (Integer) r.this.g().b().c(obj, Integer.valueOf(r.this.f56250b.indexOf(newValue) + r.this.g().g()));
            if (num != null) {
                r rVar = r.this;
                return (String) rVar.f56250b.get(num.intValue() - rVar.g().g());
            }
            return null;
        }

        @Override // bt.a
        public String getName() {
            return r.this.f56251c;
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
        this.f56249a = field;
        this.f56250b = values;
        this.f56251c = name;
        if (values.size() == (field.f() - field.g()) + 1) {
            return;
        }
        throw new IllegalArgumentException(("The number of values (" + values.size() + ") in " + values + " does not match the range of the field (" + ((field.f() - field.g()) + 1) + ')').toString());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final String h(Object obj) {
        int intValue = ((Number) this.f56249a.b().b(obj)).intValue();
        String str = (String) CollectionsKt.q0(this.f56250b, intValue - this.f56249a.g());
        if (str == null) {
            return "The value " + intValue + " of " + this.f56249a.getName() + " does not have a corresponding string representation";
        }
        return str;
    }

    @Override // zs.l
    public at.e a() {
        return new at.i(new b(this));
    }

    @Override // zs.l
    public bt.q b() {
        a aVar = new a();
        return new bt.q(CollectionsKt.e(new bt.t(this.f56250b, aVar, "one of " + this.f56250b + " for " + this.f56251c)), CollectionsKt.l());
    }

    @Override // zs.l
    public /* bridge */ /* synthetic */ n c() {
        return this.f56249a;
    }

    public final b0 g() {
        return this.f56249a;
    }
}
