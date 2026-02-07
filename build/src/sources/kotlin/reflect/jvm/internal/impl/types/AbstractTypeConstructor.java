package kotlin.reflect.jvm.internal.impl.types;

import java.util.Collection;
import java.util.List;
import kotlin.Lazy;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.builtins.KotlinBuiltIns;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassifierDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.SupertypeLoopChecker;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.storage.NotNullLazyValue;
import kotlin.reflect.jvm.internal.impl.storage.StorageManager;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeRefiner;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeRefinerKt;
import kotlin.reflect.jvm.internal.impl.types.error.ErrorUtils;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nAbstractTypeConstructor.kt\nKotlin\n*S Kotlin\n*F\n+ 1 AbstractTypeConstructor.kt\norg/jetbrains/kotlin/types/AbstractTypeConstructor\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,133:1\n1#2:134\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class AbstractTypeConstructor extends ClassifierBasedTypeConstructor {

    /* renamed from: b  reason: collision with root package name */
    private final NotNullLazyValue f34592b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f34593c;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class a implements TypeConstructor {

        /* renamed from: a  reason: collision with root package name */
        private final KotlinTypeRefiner f34594a;

        /* renamed from: b  reason: collision with root package name */
        private final Lazy f34595b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ AbstractTypeConstructor f34596c;

        public a(AbstractTypeConstructor abstractTypeConstructor, KotlinTypeRefiner kotlinTypeRefiner) {
            Intrinsics.checkNotNullParameter(kotlinTypeRefiner, "kotlinTypeRefiner");
            this.f34596c = abstractTypeConstructor;
            this.f34594a = kotlinTypeRefiner;
            this.f34595b = qr.l.b(qr.o.f48092e, new j(this, abstractTypeConstructor));
        }

        private final List b() {
            return (List) this.f34595b.getValue();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final List d(a aVar, AbstractTypeConstructor abstractTypeConstructor) {
            return KotlinTypeRefinerKt.refineTypes(aVar.f34594a, abstractTypeConstructor.getSupertypes());
        }

        @Override // kotlin.reflect.jvm.internal.impl.types.TypeConstructor
        /* renamed from: c */
        public List getSupertypes() {
            return b();
        }

        public boolean equals(Object obj) {
            return this.f34596c.equals(obj);
        }

        @Override // kotlin.reflect.jvm.internal.impl.types.TypeConstructor
        public KotlinBuiltIns getBuiltIns() {
            KotlinBuiltIns builtIns = this.f34596c.getBuiltIns();
            Intrinsics.checkNotNullExpressionValue(builtIns, "getBuiltIns(...)");
            return builtIns;
        }

        @Override // kotlin.reflect.jvm.internal.impl.types.TypeConstructor
        /* renamed from: getDeclarationDescriptor */
        public ClassifierDescriptor mo1199getDeclarationDescriptor() {
            return this.f34596c.mo1199getDeclarationDescriptor();
        }

        @Override // kotlin.reflect.jvm.internal.impl.types.TypeConstructor
        public List getParameters() {
            List<TypeParameterDescriptor> parameters = this.f34596c.getParameters();
            Intrinsics.checkNotNullExpressionValue(parameters, "getParameters(...)");
            return parameters;
        }

        public int hashCode() {
            return this.f34596c.hashCode();
        }

        @Override // kotlin.reflect.jvm.internal.impl.types.TypeConstructor
        public boolean isDenotable() {
            return this.f34596c.isDenotable();
        }

        @Override // kotlin.reflect.jvm.internal.impl.types.TypeConstructor
        public TypeConstructor refine(KotlinTypeRefiner kotlinTypeRefiner) {
            Intrinsics.checkNotNullParameter(kotlinTypeRefiner, "kotlinTypeRefiner");
            return this.f34596c.refine(kotlinTypeRefiner);
        }

        public String toString() {
            return this.f34596c.toString();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final Collection f34597a;

        /* renamed from: b  reason: collision with root package name */
        private List f34598b;

        public b(Collection allSupertypes) {
            Intrinsics.checkNotNullParameter(allSupertypes, "allSupertypes");
            this.f34597a = allSupertypes;
            this.f34598b = CollectionsKt.e(ErrorUtils.INSTANCE.getErrorTypeForLoopInSupertypes());
        }

        public final Collection a() {
            return this.f34597a;
        }

        public final List b() {
            return this.f34598b;
        }

        public final void c(List list) {
            Intrinsics.checkNotNullParameter(list, "<set-?>");
            this.f34598b = list;
        }
    }

    public AbstractTypeConstructor(@NotNull StorageManager storageManager) {
        Intrinsics.checkNotNullParameter(storageManager, "storageManager");
        this.f34592b = storageManager.createLazyValueWithPostCompute(new c(this), d.f34740d, new e(this));
    }

    private final Collection k(TypeConstructor typeConstructor, boolean z10) {
        AbstractTypeConstructor abstractTypeConstructor;
        List L0;
        if (typeConstructor instanceof AbstractTypeConstructor) {
            abstractTypeConstructor = (AbstractTypeConstructor) typeConstructor;
        } else {
            abstractTypeConstructor = null;
        }
        if (abstractTypeConstructor != null && (L0 = CollectionsKt.L0(((b) abstractTypeConstructor.f34592b.invoke()).a(), abstractTypeConstructor.n(z10))) != null) {
            return L0;
        }
        Collection<KotlinType> supertypes = typeConstructor.getSupertypes();
        Intrinsics.checkNotNullExpressionValue(supertypes, "getSupertypes(...)");
        return supertypes;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final b t(AbstractTypeConstructor abstractTypeConstructor) {
        return new b(abstractTypeConstructor.l());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final b u(boolean z10) {
        return new b(CollectionsKt.e(ErrorUtils.INSTANCE.getErrorTypeForLoopInSupertypes()));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit v(AbstractTypeConstructor abstractTypeConstructor, b supertypes) {
        List list;
        Intrinsics.checkNotNullParameter(supertypes, "supertypes");
        List findLoopsInSupertypesAndDisconnect = abstractTypeConstructor.p().findLoopsInSupertypesAndDisconnect(abstractTypeConstructor, supertypes.a(), new f(abstractTypeConstructor), new g(abstractTypeConstructor));
        List list2 = null;
        if (findLoopsInSupertypesAndDisconnect.isEmpty()) {
            KotlinType m10 = abstractTypeConstructor.m();
            if (m10 != null) {
                list = CollectionsKt.e(m10);
            } else {
                list = null;
            }
            if (list == null) {
                list = CollectionsKt.l();
            }
            findLoopsInSupertypesAndDisconnect = list;
        }
        if (abstractTypeConstructor.o()) {
            abstractTypeConstructor.p().findLoopsInSupertypesAndDisconnect(abstractTypeConstructor, findLoopsInSupertypesAndDisconnect, new h(abstractTypeConstructor), new i(abstractTypeConstructor));
        }
        if (findLoopsInSupertypesAndDisconnect instanceof List) {
            list2 = (List) findLoopsInSupertypesAndDisconnect;
        }
        if (list2 == null) {
            list2 = CollectionsKt.h1(findLoopsInSupertypesAndDisconnect);
        }
        supertypes.c(abstractTypeConstructor.q(list2));
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Iterable w(AbstractTypeConstructor abstractTypeConstructor, TypeConstructor it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return abstractTypeConstructor.k(it, false);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit x(AbstractTypeConstructor abstractTypeConstructor, KotlinType it) {
        Intrinsics.checkNotNullParameter(it, "it");
        abstractTypeConstructor.s(it);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Iterable y(AbstractTypeConstructor abstractTypeConstructor, TypeConstructor it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return abstractTypeConstructor.k(it, true);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit z(AbstractTypeConstructor abstractTypeConstructor, KotlinType it) {
        Intrinsics.checkNotNullParameter(it, "it");
        abstractTypeConstructor.r(it);
        return Unit.f32056a;
    }

    protected abstract Collection l();

    protected KotlinType m() {
        return null;
    }

    protected Collection n(boolean z10) {
        return CollectionsKt.l();
    }

    protected boolean o() {
        return this.f34593c;
    }

    protected abstract SupertypeLoopChecker p();

    protected List q(List supertypes) {
        Intrinsics.checkNotNullParameter(supertypes, "supertypes");
        return supertypes;
    }

    protected void r(KotlinType type) {
        Intrinsics.checkNotNullParameter(type, "type");
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.TypeConstructor
    @NotNull
    public TypeConstructor refine(@NotNull KotlinTypeRefiner kotlinTypeRefiner) {
        Intrinsics.checkNotNullParameter(kotlinTypeRefiner, "kotlinTypeRefiner");
        return new a(this, kotlinTypeRefiner);
    }

    protected void s(KotlinType type) {
        Intrinsics.checkNotNullParameter(type, "type");
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.TypeConstructor
    @NotNull
    public List<KotlinType> getSupertypes() {
        return ((b) this.f34592b.invoke()).b();
    }
}
