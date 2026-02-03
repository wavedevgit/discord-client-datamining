package app.rive;

import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u001e\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\bv\u0018\u00002\u00020\u0001:\u0004\u0002\u0003\u0004\u0005\u0082\u0001\u0004\u0006\u0007\b\t¨\u0006\n"}, d2 = {"Lapp/rive/ViewModelInstanceSource;", "", "Blank", "Default", "Named", "Reference", "Lapp/rive/ViewModelInstanceSource$Blank;", "Lapp/rive/ViewModelInstanceSource$Default;", "Lapp/rive/ViewModelInstanceSource$Named;", "Lapp/rive/ViewModelInstanceSource$Reference;", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface ViewModelInstanceSource {

    @Metadata(d1 = {"\u00000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0003\b\u0087@\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u001a\u0010\b\u001a\u00020\t2\b\u0010\n\u001a\u0004\u0018\u00010\u000bHÖ\u0003¢\u0006\u0004\b\f\u0010\rJ\u0010\u0010\u000e\u001a\u00020\u000fHÖ\u0001¢\u0006\u0004\b\u0010\u0010\u0011J\u0010\u0010\u0012\u001a\u00020\u0013HÖ\u0001¢\u0006\u0004\b\u0014\u0010\u0015R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007\u0088\u0001\u0002¨\u0006\u0016"}, d2 = {"Lapp/rive/ViewModelInstanceSource$Blank;", "Lapp/rive/ViewModelInstanceSource;", "vmSource", "Lapp/rive/ViewModelSource;", "constructor-impl", "(Lapp/rive/ViewModelSource;)Lapp/rive/ViewModelSource;", "getVmSource", "()Lapp/rive/ViewModelSource;", "equals", "", "other", "", "equals-impl", "(Lapp/rive/ViewModelSource;Ljava/lang/Object;)Z", "hashCode", "", "hashCode-impl", "(Lapp/rive/ViewModelSource;)I", "toString", "", "toString-impl", "(Lapp/rive/ViewModelSource;)Ljava/lang/String;", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Blank implements ViewModelInstanceSource {
        @NotNull
        private final ViewModelSource vmSource;

        private /* synthetic */ Blank(ViewModelSource viewModelSource) {
            this.vmSource = viewModelSource;
        }

        /* renamed from: box-impl  reason: not valid java name */
        public static final /* synthetic */ Blank m60boximpl(ViewModelSource viewModelSource) {
            return new Blank(viewModelSource);
        }

        @NotNull
        /* renamed from: constructor-impl  reason: not valid java name */
        public static ViewModelSource m61constructorimpl(@NotNull ViewModelSource vmSource) {
            Intrinsics.checkNotNullParameter(vmSource, "vmSource");
            return vmSource;
        }

        /* renamed from: equals-impl  reason: not valid java name */
        public static boolean m62equalsimpl(ViewModelSource viewModelSource, Object obj) {
            return (obj instanceof Blank) && Intrinsics.areEqual(viewModelSource, ((Blank) obj).m66unboximpl());
        }

        /* renamed from: equals-impl0  reason: not valid java name */
        public static final boolean m63equalsimpl0(ViewModelSource viewModelSource, ViewModelSource viewModelSource2) {
            return Intrinsics.areEqual(viewModelSource, viewModelSource2);
        }

        /* renamed from: hashCode-impl  reason: not valid java name */
        public static int m64hashCodeimpl(ViewModelSource viewModelSource) {
            return viewModelSource.hashCode();
        }

        /* renamed from: toString-impl  reason: not valid java name */
        public static String m65toStringimpl(ViewModelSource viewModelSource) {
            return "Blank(vmSource=" + viewModelSource + ")";
        }

        public boolean equals(Object obj) {
            return m62equalsimpl(this.vmSource, obj);
        }

        @NotNull
        public final ViewModelSource getVmSource() {
            return this.vmSource;
        }

        public int hashCode() {
            return m64hashCodeimpl(this.vmSource);
        }

        public String toString() {
            return m65toStringimpl(this.vmSource);
        }

        /* renamed from: unbox-impl  reason: not valid java name */
        public final /* synthetic */ ViewModelSource m66unboximpl() {
            return this.vmSource;
        }
    }

    @Metadata(d1 = {"\u00000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0003\b\u0087@\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u001a\u0010\b\u001a\u00020\t2\b\u0010\n\u001a\u0004\u0018\u00010\u000bHÖ\u0003¢\u0006\u0004\b\f\u0010\rJ\u0010\u0010\u000e\u001a\u00020\u000fHÖ\u0001¢\u0006\u0004\b\u0010\u0010\u0011J\u0010\u0010\u0012\u001a\u00020\u0013HÖ\u0001¢\u0006\u0004\b\u0014\u0010\u0015R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007\u0088\u0001\u0002¨\u0006\u0016"}, d2 = {"Lapp/rive/ViewModelInstanceSource$Default;", "Lapp/rive/ViewModelInstanceSource;", "vmSource", "Lapp/rive/ViewModelSource;", "constructor-impl", "(Lapp/rive/ViewModelSource;)Lapp/rive/ViewModelSource;", "getVmSource", "()Lapp/rive/ViewModelSource;", "equals", "", "other", "", "equals-impl", "(Lapp/rive/ViewModelSource;Ljava/lang/Object;)Z", "hashCode", "", "hashCode-impl", "(Lapp/rive/ViewModelSource;)I", "toString", "", "toString-impl", "(Lapp/rive/ViewModelSource;)Ljava/lang/String;", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Default implements ViewModelInstanceSource {
        @NotNull
        private final ViewModelSource vmSource;

        private /* synthetic */ Default(ViewModelSource viewModelSource) {
            this.vmSource = viewModelSource;
        }

        /* renamed from: box-impl  reason: not valid java name */
        public static final /* synthetic */ Default m67boximpl(ViewModelSource viewModelSource) {
            return new Default(viewModelSource);
        }

        @NotNull
        /* renamed from: constructor-impl  reason: not valid java name */
        public static ViewModelSource m68constructorimpl(@NotNull ViewModelSource vmSource) {
            Intrinsics.checkNotNullParameter(vmSource, "vmSource");
            return vmSource;
        }

        /* renamed from: equals-impl  reason: not valid java name */
        public static boolean m69equalsimpl(ViewModelSource viewModelSource, Object obj) {
            return (obj instanceof Default) && Intrinsics.areEqual(viewModelSource, ((Default) obj).m73unboximpl());
        }

        /* renamed from: equals-impl0  reason: not valid java name */
        public static final boolean m70equalsimpl0(ViewModelSource viewModelSource, ViewModelSource viewModelSource2) {
            return Intrinsics.areEqual(viewModelSource, viewModelSource2);
        }

        /* renamed from: hashCode-impl  reason: not valid java name */
        public static int m71hashCodeimpl(ViewModelSource viewModelSource) {
            return viewModelSource.hashCode();
        }

        /* renamed from: toString-impl  reason: not valid java name */
        public static String m72toStringimpl(ViewModelSource viewModelSource) {
            return "Default(vmSource=" + viewModelSource + ")";
        }

        public boolean equals(Object obj) {
            return m69equalsimpl(this.vmSource, obj);
        }

        @NotNull
        public final ViewModelSource getVmSource() {
            return this.vmSource;
        }

        public int hashCode() {
            return m71hashCodeimpl(this.vmSource);
        }

        public String toString() {
            return m72toStringimpl(this.vmSource);
        }

        /* renamed from: unbox-impl  reason: not valid java name */
        public final /* synthetic */ ViewModelSource m73unboximpl() {
            return this.vmSource;
        }
    }

    @Metadata(d1 = {"\u0000,\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\t\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0002\b\u0002\b\u0087\b\u0018\u00002\u00020\u0001B\u0015\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005¢\u0006\u0002\u0010\u0006J\t\u0010\u000b\u001a\u00020\u0003HÆ\u0003J\t\u0010\f\u001a\u00020\u0005HÆ\u0003J\u001d\u0010\r\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u0005HÆ\u0001J\u0013\u0010\u000e\u001a\u00020\u000f2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0011HÖ\u0003J\t\u0010\u0012\u001a\u00020\u0013HÖ\u0001J\t\u0010\u0014\u001a\u00020\u0005HÖ\u0001R\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0007\u0010\bR\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\t\u0010\n¨\u0006\u0015"}, d2 = {"Lapp/rive/ViewModelInstanceSource$Named;", "Lapp/rive/ViewModelInstanceSource;", "vmSource", "Lapp/rive/ViewModelSource;", "instanceName", "", "(Lapp/rive/ViewModelSource;Ljava/lang/String;)V", "getInstanceName", "()Ljava/lang/String;", "getVmSource", "()Lapp/rive/ViewModelSource;", "component1", "component2", "copy", "equals", "", "other", "", "hashCode", "", "toString", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Named implements ViewModelInstanceSource {
        public static final int $stable = 8;
        @NotNull
        private final String instanceName;
        @NotNull
        private final ViewModelSource vmSource;

        public Named(@NotNull ViewModelSource vmSource, @NotNull String instanceName) {
            Intrinsics.checkNotNullParameter(vmSource, "vmSource");
            Intrinsics.checkNotNullParameter(instanceName, "instanceName");
            this.vmSource = vmSource;
            this.instanceName = instanceName;
        }

        public static /* synthetic */ Named copy$default(Named named, ViewModelSource viewModelSource, String str, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                viewModelSource = named.vmSource;
            }
            if ((i10 & 2) != 0) {
                str = named.instanceName;
            }
            return named.copy(viewModelSource, str);
        }

        @NotNull
        public final ViewModelSource component1() {
            return this.vmSource;
        }

        @NotNull
        public final String component2() {
            return this.instanceName;
        }

        @NotNull
        public final Named copy(@NotNull ViewModelSource vmSource, @NotNull String instanceName) {
            Intrinsics.checkNotNullParameter(vmSource, "vmSource");
            Intrinsics.checkNotNullParameter(instanceName, "instanceName");
            return new Named(vmSource, instanceName);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof Named) {
                Named named = (Named) obj;
                return Intrinsics.areEqual(this.vmSource, named.vmSource) && Intrinsics.areEqual(this.instanceName, named.instanceName);
            }
            return false;
        }

        @NotNull
        public final String getInstanceName() {
            return this.instanceName;
        }

        @NotNull
        public final ViewModelSource getVmSource() {
            return this.vmSource;
        }

        public int hashCode() {
            return (this.vmSource.hashCode() * 31) + this.instanceName.hashCode();
        }

        @NotNull
        public String toString() {
            ViewModelSource viewModelSource = this.vmSource;
            String str = this.instanceName;
            return "Named(vmSource=" + viewModelSource + ", instanceName=" + str + ")";
        }
    }

    @Metadata(d1 = {"\u0000,\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\t\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0002\b\u0002\b\u0087\b\u0018\u00002\u00020\u0001B\u0015\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005¢\u0006\u0002\u0010\u0006J\t\u0010\u000b\u001a\u00020\u0003HÆ\u0003J\t\u0010\f\u001a\u00020\u0005HÆ\u0003J\u001d\u0010\r\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u0005HÆ\u0001J\u0013\u0010\u000e\u001a\u00020\u000f2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0011HÖ\u0003J\t\u0010\u0012\u001a\u00020\u0013HÖ\u0001J\t\u0010\u0014\u001a\u00020\u0005HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0007\u0010\bR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\t\u0010\n¨\u0006\u0015"}, d2 = {"Lapp/rive/ViewModelInstanceSource$Reference;", "Lapp/rive/ViewModelInstanceSource;", "instance", "Lapp/rive/ViewModelInstance;", "path", "", "(Lapp/rive/ViewModelInstance;Ljava/lang/String;)V", "getInstance", "()Lapp/rive/ViewModelInstance;", "getPath", "()Ljava/lang/String;", "component1", "component2", "copy", "equals", "", "other", "", "hashCode", "", "toString", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Reference implements ViewModelInstanceSource {
        public static final int $stable = 8;
        @NotNull
        private final ViewModelInstance instance;
        @NotNull
        private final String path;

        public Reference(@NotNull ViewModelInstance instance, @NotNull String path) {
            Intrinsics.checkNotNullParameter(instance, "instance");
            Intrinsics.checkNotNullParameter(path, "path");
            this.instance = instance;
            this.path = path;
        }

        public static /* synthetic */ Reference copy$default(Reference reference, ViewModelInstance viewModelInstance, String str, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                viewModelInstance = reference.instance;
            }
            if ((i10 & 2) != 0) {
                str = reference.path;
            }
            return reference.copy(viewModelInstance, str);
        }

        @NotNull
        public final ViewModelInstance component1() {
            return this.instance;
        }

        @NotNull
        public final String component2() {
            return this.path;
        }

        @NotNull
        public final Reference copy(@NotNull ViewModelInstance instance, @NotNull String path) {
            Intrinsics.checkNotNullParameter(instance, "instance");
            Intrinsics.checkNotNullParameter(path, "path");
            return new Reference(instance, path);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof Reference) {
                Reference reference = (Reference) obj;
                return Intrinsics.areEqual(this.instance, reference.instance) && Intrinsics.areEqual(this.path, reference.path);
            }
            return false;
        }

        @NotNull
        public final ViewModelInstance getInstance() {
            return this.instance;
        }

        @NotNull
        public final String getPath() {
            return this.path;
        }

        public int hashCode() {
            return (this.instance.hashCode() * 31) + this.path.hashCode();
        }

        @NotNull
        public String toString() {
            ViewModelInstance viewModelInstance = this.instance;
            String str = this.path;
            return "Reference(instance=" + viewModelInstance + ", path=" + str + ")";
        }
    }
}
