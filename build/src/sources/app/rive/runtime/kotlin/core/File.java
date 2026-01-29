package app.rive.runtime.kotlin.core;

import app.rive.runtime.kotlin.core.errors.ArtboardException;
import app.rive.runtime.kotlin.core.errors.ViewModelException;
import com.facebook.react.devsupport.StackTraceHelper;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.locks.ReentrantLock;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.collections.m0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.ranges.IntRange;
import kotlin.ranges.d;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000j\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0012\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010 \n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\n\n\u0002\u0010\t\n\u0002\b\t\n\u0002\u0010\u0002\n\u0002\b\b\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\b\b\u0017\u0018\u00002\u00020\u0001:\u0001BB#\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\b\u0002\u0010\u0004\u001a\u00020\u0005\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0007¢\u0006\u0002\u0010\bJ\u0010\u0010!\u001a\u00020\u00162\u0006\u0010\"\u001a\u00020\nH\u0016J\u0010\u0010!\u001a\u00020\u00162\u0006\u0010#\u001a\u00020\u000fH\u0016J\u0019\u0010$\u001a\u00020%2\u0006\u0010&\u001a\u00020%2\u0006\u0010\"\u001a\u00020\nH\u0095 J\u0019\u0010'\u001a\u00020%2\u0006\u0010&\u001a\u00020%2\u0006\u0010#\u001a\u00020\u000fH\u0092 J\u0011\u0010(\u001a\u00020\n2\u0006\u0010&\u001a\u00020%H\u0092 J\u0019\u0010)\u001a\u00020\u000f2\u0006\u0010&\u001a\u00020%2\u0006\u0010\"\u001a\u00020\nH\u0092 J\u0019\u0010*\u001a\u00020%2\u0006\u0010&\u001a\u00020%2\u0006\u0010#\u001a\u00020\u000fH\u0092 J\u0011\u0010+\u001a\u00020%2\u0006\u0010&\u001a\u00020%H\u0092 J\u0019\u0010,\u001a\u00020%2\u0006\u0010&\u001a\u00020%2\u0006\u0010-\u001a\u00020%H\u0092 J\u0011\u0010.\u001a\u00020/2\u0006\u00100\u001a\u00020%H\u0096 J\u0017\u00101\u001a\b\u0012\u0004\u0012\u00020\u00130\u000e2\u0006\u0010&\u001a\u00020%H\u0092 J\u0019\u00102\u001a\u00020%2\u0006\u0010&\u001a\u00020%2\u0006\u00103\u001a\u00020\nH\u0092 J\u0019\u00104\u001a\u00020%2\u0006\u0010&\u001a\u00020%2\u0006\u00105\u001a\u00020\u000fH\u0095 J\u0011\u00106\u001a\u00020\n2\u0006\u0010&\u001a\u00020%H\u0092 J\u0010\u00107\u001a\u0002082\u0006\u0010#\u001a\u00020\u000fH\u0016J\b\u00109\u001a\u000208H\u0016J\u0010\u0010:\u001a\u00020;2\u0006\u0010!\u001a\u00020\u0016H\u0016J\u0010\u0010<\u001a\u00020;2\u0006\u00103\u001a\u00020\nH\u0016J\u0010\u0010=\u001a\u00020;2\u0006\u00105\u001a\u00020\u000fH\u0016J)\u0010>\u001a\u00020%2\u0006\u0010\u0002\u001a\u00020\u00032\u0006\u0010?\u001a\u00020\n2\u0006\u0010\u0004\u001a\u00020\n2\u0006\u0010@\u001a\u00020%H\u0092 J\b\u0010A\u001a\u00020\nH\u0016R\u0014\u0010\t\u001a\u00020\n8VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b\u000b\u0010\fR\u001a\u0010\r\u001a\b\u0012\u0004\u0012\u00020\u000f0\u000e8VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b\u0010\u0010\u0011R\u001a\u0010\u0012\u001a\b\u0012\u0004\u0012\u00020\u00130\u000e8VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b\u0014\u0010\u0011R\u0014\u0010\u0015\u001a\u00020\u00168VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b\u0017\u0010\u0018R\u0014\u0010\u0019\u001a\u00020\u001aX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u001b\u0010\u001cR\u0014\u0010\u0004\u001a\u00020\u0005X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u001d\u0010\u001eR\u0014\u0010\u001f\u001a\u00020\n8VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b \u0010\f¨\u0006C"}, d2 = {"Lapp/rive/runtime/kotlin/core/File;", "Lapp/rive/runtime/kotlin/core/NativeObject;", "bytes", "", "rendererType", "Lapp/rive/runtime/kotlin/core/RendererType;", "fileAssetLoader", "Lapp/rive/runtime/kotlin/core/FileAssetLoader;", "([BLapp/rive/runtime/kotlin/core/RendererType;Lapp/rive/runtime/kotlin/core/FileAssetLoader;)V", "artboardCount", "", "getArtboardCount", "()I", "artboardNames", "", "", "getArtboardNames", "()Ljava/util/List;", "enums", "Lapp/rive/runtime/kotlin/core/File$Enum;", "getEnums", "firstArtboard", "Lapp/rive/runtime/kotlin/core/Artboard;", "getFirstArtboard", "()Lapp/rive/runtime/kotlin/core/Artboard;", "lock", "Ljava/util/concurrent/locks/ReentrantLock;", "getLock", "()Ljava/util/concurrent/locks/ReentrantLock;", "getRendererType", "()Lapp/rive/runtime/kotlin/core/RendererType;", "viewModelCount", "getViewModelCount", "artboard", "index", StackTraceHelper.NAME_KEY, "cppArtboardByIndex", "", "cppPointer", "cppArtboardByName", "cppArtboardCount", "cppArtboardNameByIndex", "cppCreateBindableArtboardByName", "cppCreateDefaultBindableArtboard", "cppDefaultViewModelForArtboard", "artboardPointer", "cppDelete", "", "pointer", "cppEnums", "cppViewModelByIndex", "viewModelIdx", "cppViewModelByName", "viewModelName", "cppViewModelCount", "createBindableArtboardByName", "Lapp/rive/runtime/kotlin/core/BindableArtboard;", "createDefaultBindableArtboard", "defaultViewModelForArtboard", "Lapp/rive/runtime/kotlin/core/ViewModel;", "getViewModelByIndex", "getViewModelByName", "import", "length", "fileAssetLoaderPointer", "release", "Enum", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nFile.kt\nKotlin\n*S Kotlin\n*F\n+ 1 File.kt\napp/rive/runtime/kotlin/core/File\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 3 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,250:1\n1557#2:251\n1628#2,3:252\n1557#2:256\n1628#2,3:257\n1#3:255\n*S KotlinDebug\n*F\n+ 1 File.kt\napp/rive/runtime/kotlin/core/File\n*L\n109#1:251\n109#1:252,3\n180#1:256\n180#1:257,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class File extends NativeObject {
    public static final int $stable = 8;
    @NotNull
    private final ReentrantLock lock;
    @NotNull
    private final RendererType rendererType;

    @Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010 \n\u0002\b\t\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0002\b\u0087\b\u0018\u00002\u00020\u0001B\u001b\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00030\u0005¢\u0006\u0002\u0010\u0006J\t\u0010\u000b\u001a\u00020\u0003HÆ\u0003J\u000f\u0010\f\u001a\b\u0012\u0004\u0012\u00020\u00030\u0005HÆ\u0003J#\u0010\r\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\u000e\b\u0002\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00030\u0005HÆ\u0001J\u0013\u0010\u000e\u001a\u00020\u000f2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u0011\u001a\u00020\u0012HÖ\u0001J\t\u0010\u0013\u001a\u00020\u0003HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0007\u0010\bR\u0017\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00030\u0005¢\u0006\b\n\u0000\u001a\u0004\b\t\u0010\n¨\u0006\u0014"}, d2 = {"Lapp/rive/runtime/kotlin/core/File$Enum;", "", StackTraceHelper.NAME_KEY, "", "values", "", "(Ljava/lang/String;Ljava/util/List;)V", "getName", "()Ljava/lang/String;", "getValues", "()Ljava/util/List;", "component1", "component2", "copy", "equals", "", "other", "hashCode", "", "toString", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Enum {
        public static final int $stable = 8;
        @NotNull
        private final String name;
        @NotNull
        private final List<String> values;

        public Enum(@NotNull String name, @NotNull List<String> values) {
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(values, "values");
            this.name = name;
            this.values = values;
        }

        /* JADX WARN: Multi-variable type inference failed */
        public static /* synthetic */ Enum copy$default(Enum r02, String str, List list, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = r02.name;
            }
            if ((i10 & 2) != 0) {
                list = r02.values;
            }
            return r02.copy(str, list);
        }

        @NotNull
        public final String component1() {
            return this.name;
        }

        @NotNull
        public final List<String> component2() {
            return this.values;
        }

        @NotNull
        public final Enum copy(@NotNull String name, @NotNull List<String> values) {
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(values, "values");
            return new Enum(name, values);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof Enum) {
                Enum r52 = (Enum) obj;
                return Intrinsics.areEqual(this.name, r52.name) && Intrinsics.areEqual(this.values, r52.values);
            }
            return false;
        }

        @NotNull
        public final String getName() {
            return this.name;
        }

        @NotNull
        public final List<String> getValues() {
            return this.values;
        }

        public int hashCode() {
            return (this.name.hashCode() * 31) + this.values.hashCode();
        }

        @NotNull
        public String toString() {
            String str = this.name;
            List<String> list = this.values;
            return "Enum(name=" + str + ", values=" + list + ")";
        }
    }

    public /* synthetic */ File(byte[] bArr, RendererType rendererType, FileAssetLoader fileAssetLoader, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(bArr, (i10 & 2) != 0 ? Rive.INSTANCE.getDefaultRendererType() : rendererType, (i10 & 4) != 0 ? null : fileAssetLoader);
    }

    private native long cppArtboardByName(long j10, String str);

    private native int cppArtboardCount(long j10);

    private native String cppArtboardNameByIndex(long j10, int i10);

    private native long cppCreateBindableArtboardByName(long j10, String str);

    private native long cppCreateDefaultBindableArtboard(long j10);

    private native long cppDefaultViewModelForArtboard(long j10, long j11);

    private native List<Enum> cppEnums(long j10);

    private native long cppViewModelByIndex(long j10, int i10);

    private native int cppViewModelCount(long j10);

    /* renamed from: import  reason: not valid java name */
    private native long m205import(byte[] bArr, int i10, int i11, long j10);

    @NotNull
    public Artboard artboard(@NotNull String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        long cppArtboardByName = cppArtboardByName(getCppPointer(), name);
        if (cppArtboardByName == 0) {
            List<String> artboardNames = getArtboardNames();
            ArrayList arrayList = new ArrayList(CollectionsKt.w(artboardNames, 10));
            Iterator<T> it = artboardNames.iterator();
            while (it.hasNext()) {
                arrayList.add("\"" + ((String) it.next()) + "\"");
            }
            throw new ArtboardException("Artboard \"" + name + "\" not found. Available Artboards: " + arrayList);
        }
        Artboard artboard = new Artboard(cppArtboardByName, getLock(), this);
        getDependencies().add(artboard);
        return artboard;
    }

    protected native long cppArtboardByIndex(long j10, int i10);

    @Override // app.rive.runtime.kotlin.core.NativeObject
    public native void cppDelete(long j10);

    protected native long cppViewModelByName(long j10, @NotNull String str);

    @NotNull
    public BindableArtboard createBindableArtboardByName(@NotNull String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        long cppCreateBindableArtboardByName = cppCreateBindableArtboardByName(getCppPointer(), name);
        if (cppCreateBindableArtboardByName != 0) {
            BindableArtboard bindableArtboard = new BindableArtboard(cppCreateBindableArtboardByName);
            getDependencies().add(bindableArtboard);
            return bindableArtboard;
        }
        throw new ArtboardException("No BindableArtboard found with name " + name + ".");
    }

    @NotNull
    public BindableArtboard createDefaultBindableArtboard() {
        long cppCreateDefaultBindableArtboard = cppCreateDefaultBindableArtboard(getCppPointer());
        if (cppCreateDefaultBindableArtboard != 0) {
            BindableArtboard bindableArtboard = new BindableArtboard(cppCreateDefaultBindableArtboard);
            getDependencies().add(bindableArtboard);
            return bindableArtboard;
        }
        throw new ArtboardException("No default BindableArtboard.");
    }

    @NotNull
    public ViewModel defaultViewModelForArtboard(@NotNull Artboard artboard) {
        Intrinsics.checkNotNullParameter(artboard, "artboard");
        long cppDefaultViewModelForArtboard = cppDefaultViewModelForArtboard(getCppPointer(), artboard.getCppPointer());
        if (cppDefaultViewModelForArtboard != 0) {
            ViewModel viewModel = new ViewModel(cppDefaultViewModelForArtboard);
            getDependencies().add(viewModel);
            return viewModel;
        }
        String name = artboard.getName();
        throw new ViewModelException("No default ViewModel found for artboard " + name + ".");
    }

    public int getArtboardCount() {
        return cppArtboardCount(getCppPointer());
    }

    @NotNull
    public List<String> getArtboardNames() {
        IntRange u10 = d.u(0, getArtboardCount());
        ArrayList arrayList = new ArrayList(CollectionsKt.w(u10, 10));
        Iterator it = u10.iterator();
        while (it.hasNext()) {
            arrayList.add(cppArtboardNameByIndex(getCppPointer(), ((m0) it).nextInt()));
        }
        return arrayList;
    }

    @NotNull
    public List<Enum> getEnums() {
        return cppEnums(getCppPointer());
    }

    @NotNull
    public Artboard getFirstArtboard() {
        return artboard(0);
    }

    @NotNull
    public ReentrantLock getLock() {
        return this.lock;
    }

    @NotNull
    public RendererType getRendererType() {
        return this.rendererType;
    }

    @NotNull
    public ViewModel getViewModelByIndex(int i10) {
        long cppViewModelByIndex = cppViewModelByIndex(getCppPointer(), i10);
        if (cppViewModelByIndex != 0) {
            ViewModel viewModel = new ViewModel(cppViewModelByIndex);
            getDependencies().add(viewModel);
            return viewModel;
        }
        throw new ViewModelException("No ViewModel found at index " + i10 + ".");
    }

    @NotNull
    public ViewModel getViewModelByName(@NotNull String viewModelName) {
        Intrinsics.checkNotNullParameter(viewModelName, "viewModelName");
        long cppViewModelByName = cppViewModelByName(getCppPointer(), viewModelName);
        if (cppViewModelByName != 0) {
            ViewModel viewModel = new ViewModel(cppViewModelByName);
            getDependencies().add(viewModel);
            return viewModel;
        }
        throw new ViewModelException("No ViewModel found with name " + viewModelName + ".");
    }

    public int getViewModelCount() {
        return cppViewModelCount(getCppPointer());
    }

    @Override // app.rive.runtime.kotlin.core.NativeObject, app.rive.runtime.kotlin.core.RefCount
    public int release() {
        int release;
        synchronized (getLock()) {
            release = super.release();
        }
        return release;
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public File(@NotNull byte[] bytes, @NotNull RendererType rendererType, FileAssetLoader fileAssetLoader) {
        super(0L);
        Intrinsics.checkNotNullParameter(bytes, "bytes");
        Intrinsics.checkNotNullParameter(rendererType, "rendererType");
        this.rendererType = rendererType;
        if (fileAssetLoader != null) {
            fileAssetLoader.setRendererType(getRendererType());
            fileAssetLoader.acquire();
            getDependencies().add(fileAssetLoader);
        }
        setCppPointer(m205import(bytes, bytes.length, getRendererType().getValue(), fileAssetLoader != null ? fileAssetLoader.getCppPointer() : 0L));
        getRefs().incrementAndGet();
        this.lock = new ReentrantLock();
    }

    @NotNull
    public Artboard artboard(int i10) {
        long cppArtboardByIndex = cppArtboardByIndex(getCppPointer(), i10);
        if (cppArtboardByIndex != 0) {
            Artboard artboard = new Artboard(cppArtboardByIndex, getLock(), this);
            getDependencies().add(artboard);
            return artboard;
        }
        throw new ArtboardException("No Artboard found at index " + i10 + ".");
    }
}
