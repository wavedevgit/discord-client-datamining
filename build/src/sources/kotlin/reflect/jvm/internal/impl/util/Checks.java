package kotlin.reflect.jvm.internal.impl.util;

import java.util.Arrays;
import java.util.Collection;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.util.CheckResult;
import kotlin.text.Regex;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class Checks {

    /* renamed from: a  reason: collision with root package name */
    private final Name f35239a;

    /* renamed from: b  reason: collision with root package name */
    private final Regex f35240b;

    /* renamed from: c  reason: collision with root package name */
    private final Collection f35241c;

    /* renamed from: d  reason: collision with root package name */
    private final Function1 f35242d;

    /* renamed from: e  reason: collision with root package name */
    private final Check[] f35243e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f35244d = new a();

        a() {
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final Void invoke(FunctionDescriptor functionDescriptor) {
            Intrinsics.checkNotNullParameter(functionDescriptor, "<this>");
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        public static final b f35245d = new b();

        b() {
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final Void invoke(FunctionDescriptor functionDescriptor) {
            Intrinsics.checkNotNullParameter(functionDescriptor, "<this>");
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        public static final c f35246d = new c();

        c() {
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final Void invoke(FunctionDescriptor functionDescriptor) {
            Intrinsics.checkNotNullParameter(functionDescriptor, "<this>");
            return null;
        }
    }

    private Checks(Name name, Regex regex, Collection collection, Function1 function1, Check... checkArr) {
        this.f35239a = name;
        this.f35240b = regex;
        this.f35241c = collection;
        this.f35242d = function1;
        this.f35243e = checkArr;
    }

    @NotNull
    public final CheckResult checkAll(@NotNull FunctionDescriptor functionDescriptor) {
        Intrinsics.checkNotNullParameter(functionDescriptor, "functionDescriptor");
        for (Check check : this.f35243e) {
            String invoke = check.invoke(functionDescriptor);
            if (invoke != null) {
                return new CheckResult.IllegalSignature(invoke);
            }
        }
        String str = (String) this.f35242d.invoke(functionDescriptor);
        if (str != null) {
            return new CheckResult.IllegalSignature(str);
        }
        return CheckResult.SuccessCheck.INSTANCE;
    }

    public final boolean isApplicable(@NotNull FunctionDescriptor functionDescriptor) {
        Intrinsics.checkNotNullParameter(functionDescriptor, "functionDescriptor");
        if (this.f35239a != null && !Intrinsics.areEqual(functionDescriptor.getName(), this.f35239a)) {
            return false;
        }
        if (this.f35240b != null) {
            String asString = functionDescriptor.getName().asString();
            Intrinsics.checkNotNullExpressionValue(asString, "asString(...)");
            if (!this.f35240b.i(asString)) {
                return false;
            }
        }
        Collection collection = this.f35241c;
        if (collection != null && !collection.contains(functionDescriptor.getName())) {
            return false;
        }
        return true;
    }

    public /* synthetic */ Checks(Name name, Check[] checkArr, Function1 function1, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(name, checkArr, (i10 & 4) != 0 ? a.f35244d : function1);
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public Checks(@NotNull Name name, @NotNull Check[] checks, @NotNull Function1<? super FunctionDescriptor, String> additionalChecks) {
        this(name, (Regex) null, (Collection) null, additionalChecks, (Check[]) Arrays.copyOf(checks, checks.length));
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(checks, "checks");
        Intrinsics.checkNotNullParameter(additionalChecks, "additionalChecks");
    }

    public /* synthetic */ Checks(Regex regex, Check[] checkArr, Function1 function1, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(regex, checkArr, (i10 & 4) != 0 ? b.f35245d : function1);
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public Checks(@NotNull Regex regex, @NotNull Check[] checks, @NotNull Function1<? super FunctionDescriptor, String> additionalChecks) {
        this((Name) null, regex, (Collection) null, additionalChecks, (Check[]) Arrays.copyOf(checks, checks.length));
        Intrinsics.checkNotNullParameter(regex, "regex");
        Intrinsics.checkNotNullParameter(checks, "checks");
        Intrinsics.checkNotNullParameter(additionalChecks, "additionalChecks");
    }

    public /* synthetic */ Checks(Collection collection, Check[] checkArr, Function1 function1, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(collection, checkArr, (i10 & 4) != 0 ? c.f35246d : function1);
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public Checks(@NotNull Collection<Name> nameList, @NotNull Check[] checks, @NotNull Function1<? super FunctionDescriptor, String> additionalChecks) {
        this((Name) null, (Regex) null, nameList, additionalChecks, (Check[]) Arrays.copyOf(checks, checks.length));
        Intrinsics.checkNotNullParameter(nameList, "nameList");
        Intrinsics.checkNotNullParameter(checks, "checks");
        Intrinsics.checkNotNullParameter(additionalChecks, "additionalChecks");
    }
}
