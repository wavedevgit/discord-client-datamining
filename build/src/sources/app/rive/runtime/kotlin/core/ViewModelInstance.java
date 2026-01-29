package app.rive.runtime.kotlin.core;

import app.rive.runtime.kotlin.core.errors.ViewModelException;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.uimanager.ViewProps;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u0090\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\t\n\u0002\b\u0002\n\u0002\u0010%\n\u0002\u0010\u000e\n\u0002\b\b\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0011\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010 \n\u0002\b\u0002\b\u0017\u0018\u00002\u00020\u0001:\u0001KB\u000f\b\u0000\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0002\u0010\u0004J\u0010\u0010\u0013\u001a\u00020\u00142\u0006\u0010\u0015\u001a\u00020\u0003H\u0016J\u0011\u0010\u0016\u001a\u00020\u00142\u0006\u0010\u0017\u001a\u00020\u0003H\u0092 J\u0011\u0010\u0018\u001a\u00020\u00072\u0006\u0010\u0017\u001a\u00020\u0003H\u0092 J\u0019\u0010\u0019\u001a\u00020\u00032\u0006\u0010\u0017\u001a\u00020\u00032\u0006\u0010\u001a\u001a\u00020\u0007H\u0092 J\u0019\u0010\u001b\u001a\u00020\u00032\u0006\u0010\u0017\u001a\u00020\u00032\u0006\u0010\u001a\u001a\u00020\u0007H\u0092 J\u0019\u0010\u001c\u001a\u00020\u00032\u0006\u0010\u0017\u001a\u00020\u00032\u0006\u0010\u001a\u001a\u00020\u0007H\u0092 J\u0019\u0010\u001d\u001a\u00020\u00032\u0006\u0010\u0017\u001a\u00020\u00032\u0006\u0010\u001a\u001a\u00020\u0007H\u0092 J\u0019\u0010\u001e\u001a\u00020\u00032\u0006\u0010\u0017\u001a\u00020\u00032\u0006\u0010\u001a\u001a\u00020\u0007H\u0092 J\u0019\u0010\u001f\u001a\u00020\u00032\u0006\u0010\u0017\u001a\u00020\u00032\u0006\u0010\u001a\u001a\u00020\u0007H\u0092 J\u0019\u0010 \u001a\u00020\u00032\u0006\u0010\u0017\u001a\u00020\u00032\u0006\u0010\u001a\u001a\u00020\u0007H\u0092 J\u0019\u0010!\u001a\u00020\u00032\u0006\u0010\u0017\u001a\u00020\u00032\u0006\u0010\u001a\u001a\u00020\u0007H\u0092 J\u0019\u0010\"\u001a\u00020\u00032\u0006\u0010\u0017\u001a\u00020\u00032\u0006\u0010\u001a\u001a\u00020\u0007H\u0092 J\u0019\u0010#\u001a\u00020\u00032\u0006\u0010\u0017\u001a\u00020\u00032\u0006\u0010\u001a\u001a\u00020\u0007H\u0092 J\u0011\u0010$\u001a\u00020\u00142\u0006\u0010\u0017\u001a\u00020\u0003H\u0092 J!\u0010%\u001a\u00020&2\u0006\u0010\u0017\u001a\u00020\u00032\u0006\u0010\u001a\u001a\u00020\u00072\u0006\u0010'\u001a\u00020\u0003H\u0092 J\u0010\u0010(\u001a\u00020)2\u0006\u0010\u001a\u001a\u00020\u0007H\u0016J\u0010\u0010*\u001a\u00020+2\u0006\u0010\u001a\u001a\u00020\u0007H\u0016J\u0010\u0010,\u001a\u00020-2\u0006\u0010\u001a\u001a\u00020\u0007H\u0016J\u0010\u0010.\u001a\u00020/2\u0006\u0010\u001a\u001a\u00020\u0007H\u0016J\u0010\u00100\u001a\u0002012\u0006\u0010\u001a\u001a\u00020\u0007H\u0016J\u0010\u00102\u001a\u00020\u00002\u0006\u0010\u001a\u001a\u00020\u0007H\u0016J\u0010\u00103\u001a\u0002042\u0006\u0010\u001a\u001a\u00020\u0007H\u0016J\u0010\u00105\u001a\u0002062\u0006\u0010\u001a\u001a\u00020\u0007H\u0016JX\u00107\u001a\u0002H8\"\u000e\b\u0000\u00108\u0018\u0001*\u0006\u0012\u0002\b\u00030\u00102\u0006\u0010\u001a\u001a\u00020\u00072\u001a\b\u0004\u00109\u001a\u0014\u0012\u0004\u0012\u00020\u0003\u0012\u0004\u0012\u00020\u0007\u0012\u0004\u0012\u00020\u00030:2\u0014\b\u0004\u0010;\u001a\u000e\u0012\u0004\u0012\u00020\u0003\u0012\u0004\u0012\u0002H80<H\u0092\b¢\u0006\u0002\u0010=J\u0010\u0010>\u001a\u00020?2\u0006\u0010\u001a\u001a\u00020\u0007H\u0016J\u0010\u0010@\u001a\u00020A2\u0006\u0010\u001a\u001a\u00020\u0007H\u0016J\r\u0010B\u001a\u00020\u0014H\u0011¢\u0006\u0002\bCJ\u0018\u0010D\u001a\u00020\u00142\u0006\u0010\u001a\u001a\u00020\u00072\u0006\u0010E\u001a\u00020\u0000H\u0016J\b\u0010F\u001a\u00020GH\u0016J\u0016\u0010H\u001a\u00020\u00002\f\u0010I\u001a\b\u0012\u0004\u0012\u00020\u00070JH\u0012R&\u0010\u0005\u001a\u000e\u0012\u0004\u0012\u00020\u0007\u0012\u0004\u0012\u00020\u00000\u0006X\u0094\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\b\u0010\t\"\u0004\b\n\u0010\u000bR\u0014\u0010\f\u001a\u00020\u00078VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b\r\u0010\u000eR*\u0010\u000f\u001a\u0012\u0012\u0004\u0012\u00020\u0007\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00100\u0006X\u0094\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0011\u0010\t\"\u0004\b\u0012\u0010\u000b¨\u0006L"}, d2 = {"Lapp/rive/runtime/kotlin/core/ViewModelInstance;", "Lapp/rive/runtime/kotlin/core/NativeObject;", "unsafeCppPointer", "", "(J)V", "children", "", "", "getChildren", "()Ljava/util/Map;", "setChildren", "(Ljava/util/Map;)V", StackTraceHelper.NAME_KEY, "getName", "()Ljava/lang/String;", "properties", "Lapp/rive/runtime/kotlin/core/ViewModelProperty;", "getProperties", "setProperties", "cppDelete", "", "pointer", "cppDerefInstance", "cppPointer", "cppName", "cppPropertyArtboard", "path", "cppPropertyBoolean", "cppPropertyColor", "cppPropertyEnum", "cppPropertyImage", "cppPropertyInstance", "cppPropertyList", "cppPropertyNumber", "cppPropertyString", "cppPropertyTrigger", "cppRefInstance", "cppSetInstanceProperty", "", "instancePointer", "getArtboardProperty", "Lapp/rive/runtime/kotlin/core/ViewModelArtboardProperty;", "getBooleanProperty", "Lapp/rive/runtime/kotlin/core/ViewModelBooleanProperty;", "getColorProperty", "Lapp/rive/runtime/kotlin/core/ViewModelColorProperty;", "getEnumProperty", "Lapp/rive/runtime/kotlin/core/ViewModelEnumProperty;", "getImageProperty", "Lapp/rive/runtime/kotlin/core/ViewModelImageProperty;", "getInstanceProperty", "getListProperty", "Lapp/rive/runtime/kotlin/core/ViewModelListProperty;", "getNumberProperty", "Lapp/rive/runtime/kotlin/core/ViewModelNumberProperty;", "getProperty", "T", "cppGetPropertyFn", "Lkotlin/Function2;", "constructor", "Lkotlin/Function1;", "(Ljava/lang/String;Lkotlin/jvm/functions/Function2;Lkotlin/jvm/functions/Function1;)Lapp/rive/runtime/kotlin/core/ViewModelProperty;", "getStringProperty", "Lapp/rive/runtime/kotlin/core/ViewModelStringProperty;", "getTriggerProperty", "Lapp/rive/runtime/kotlin/core/ViewModelTriggerProperty;", "pollChanges", "pollChanges$kotlin_release", "setInstanceProperty", "instance", "transfer", "Lapp/rive/runtime/kotlin/core/ViewModelInstance$Transfer;", "traverse", "parts", "", "Transfer", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nViewModelInstance.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ViewModelInstance.kt\napp/rive/runtime/kotlin/core/ViewModelInstance\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 3 Maps.kt\nkotlin/collections/MapsKt__MapsKt\n*L\n1#1,750:1\n219#1,23:755\n219#1,23:778\n219#1,23:801\n219#1,23:824\n219#1,23:847\n219#1,23:870\n219#1,23:893\n219#1,23:916\n219#1,23:939\n1863#2,2:751\n1863#2,2:753\n381#3,7:962\n*S KotlinDebug\n*F\n+ 1 ViewModelInstance.kt\napp/rive/runtime/kotlin/core/ViewModelInstance\n*L\n86#1:755,23\n97#1:778,23\n108#1:801,23\n121#1:824,23\n134#1:847,23\n145#1:870,23\n156#1:893,23\n167#1:916,23\n171#1:939,23\n71#1:751,2\n72#1:753,2\n270#1:962,7\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class ViewModelInstance extends NativeObject {
    public static final int $stable = 8;
    @NotNull
    private Map<String, ViewModelInstance> children;
    @NotNull
    private Map<String, ViewModelProperty<?>> properties;

    @Metadata(d1 = {"\u0000 \n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0003\b\u0007\u0018\u00002\u00020\u0001B\u000f\b\u0000\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0002\u0010\u0004J\u0006\u0010\u0007\u001a\u00020\bJ\r\u0010\t\u001a\u00020\u0003H\u0000¢\u0006\u0002\b\nR\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0005\u001a\u00020\u0006X\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006\u000b"}, d2 = {"Lapp/rive/runtime/kotlin/core/ViewModelInstance$Transfer;", "", "instance", "Lapp/rive/runtime/kotlin/core/ViewModelInstance;", "(Lapp/rive/runtime/kotlin/core/ViewModelInstance;)V", "valid", "", "dispose", "", ViewProps.END, "end$kotlin_release", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Transfer {
        public static final int $stable = 8;
        @NotNull
        private final ViewModelInstance instance;
        private boolean valid;

        public Transfer(@NotNull ViewModelInstance instance) {
            Intrinsics.checkNotNullParameter(instance, "instance");
            this.instance = instance;
            this.valid = true;
            if (instance.getRefCount() > 0) {
                instance.cppRefInstance(instance.getCppPointer());
                instance.acquire();
                return;
            }
            throw new ViewModelException("Cannot transfer a disposed ViewModelInstance.");
        }

        public final void dispose() {
            if (this.valid) {
                this.valid = false;
                this.instance.release();
                return;
            }
            ViewModelInstance viewModelInstance = this.instance;
            throw new ViewModelException("Transfer of ViewModelInstance " + viewModelInstance + " already ended. Cannot dispose.");
        }

        @NotNull
        public final ViewModelInstance end$kotlin_release() {
            if (this.valid) {
                this.valid = false;
                return this.instance;
            }
            ViewModelInstance viewModelInstance = this.instance;
            throw new ViewModelException("Transfer of ViewModelInstance " + viewModelInstance + " already ended. Cannot end transfer again.");
        }
    }

    public ViewModelInstance(long j10) {
        super(j10);
        this.properties = new ConcurrentHashMap();
        this.children = new ConcurrentHashMap();
        cppRefInstance(getCppPointer());
    }

    private native void cppDerefInstance(long j10);

    private native String cppName(long j10);

    /* JADX INFO: Access modifiers changed from: private */
    public native long cppPropertyArtboard(long j10, String str);

    /* JADX INFO: Access modifiers changed from: private */
    public native long cppPropertyBoolean(long j10, String str);

    /* JADX INFO: Access modifiers changed from: private */
    public native long cppPropertyColor(long j10, String str);

    /* JADX INFO: Access modifiers changed from: private */
    public native long cppPropertyEnum(long j10, String str);

    /* JADX INFO: Access modifiers changed from: private */
    public native long cppPropertyImage(long j10, String str);

    private native long cppPropertyInstance(long j10, String str);

    /* JADX INFO: Access modifiers changed from: private */
    public native long cppPropertyList(long j10, String str);

    /* JADX INFO: Access modifiers changed from: private */
    public native long cppPropertyNumber(long j10, String str);

    /* JADX INFO: Access modifiers changed from: private */
    public native long cppPropertyString(long j10, String str);

    /* JADX INFO: Access modifiers changed from: private */
    public native long cppPropertyTrigger(long j10, String str);

    /* JADX INFO: Access modifiers changed from: private */
    public native void cppRefInstance(long j10);

    private native boolean cppSetInstanceProperty(long j10, String str, long j11);

    private /* synthetic */ <T extends ViewModelProperty<?>> T getProperty(String str, Function2<? super Long, ? super String, Long> function2, Function1<? super Long, ? extends T> function1) {
        List split$default = StringsKt.split$default(str, new String[]{"/"}, false, 0, 6, null);
        List<String> subList = split$default.subList(0, split$default.size() - 1);
        String str2 = (String) CollectionsKt.z0(split$default);
        ViewModelInstance traverse = traverse(subList);
        T t10 = (T) traverse.getProperties().get(str2);
        if (t10 != null) {
            Intrinsics.reifiedOperationMarker(3, "T");
            return t10;
        }
        long longValue = ((Number) function2.invoke(Long.valueOf(traverse.getCppPointer()), str2)).longValue();
        if (longValue != 0) {
            T t11 = (T) function1.invoke(Long.valueOf(longValue));
            traverse.getProperties().put(str2, t11);
            getDependencies().add(t11);
            return t11;
        }
        throw new ViewModelException("Property not found: " + str);
    }

    private ViewModelInstance traverse(List<String> list) {
        if (list.isEmpty()) {
            return this;
        }
        String str = (String) CollectionsKt.o0(list);
        Map<String, ViewModelInstance> children = getChildren();
        ViewModelInstance viewModelInstance = children.get(str);
        if (viewModelInstance == null) {
            viewModelInstance = traverse$createChildInstance(this, str);
            children.put(str, viewModelInstance);
        }
        return viewModelInstance.traverse(list.subList(1, list.size()));
    }

    private static final ViewModelInstance traverse$createChildInstance(ViewModelInstance viewModelInstance, String str) {
        long cppPropertyInstance = viewModelInstance.cppPropertyInstance(viewModelInstance.getCppPointer(), str);
        if (cppPropertyInstance != 0) {
            ViewModelInstance viewModelInstance2 = new ViewModelInstance(cppPropertyInstance);
            viewModelInstance.getChildren().put(str, viewModelInstance2);
            viewModelInstance.getDependencies().add(viewModelInstance2);
            return viewModelInstance2;
        }
        throw new ViewModelException("Property not found: " + str);
    }

    @Override // app.rive.runtime.kotlin.core.NativeObject
    public void cppDelete(long j10) {
        cppDerefInstance(j10);
    }

    @NotNull
    public ViewModelArtboardProperty getArtboardProperty(@NotNull String path) {
        Intrinsics.checkNotNullParameter(path, "path");
        List split$default = StringsKt.split$default(path, new String[]{"/"}, false, 0, 6, null);
        List<String> subList = split$default.subList(0, split$default.size() - 1);
        String str = (String) CollectionsKt.z0(split$default);
        ViewModelInstance traverse = traverse(subList);
        ViewModelProperty<?> viewModelProperty = traverse.getProperties().get(str);
        if (viewModelProperty == null) {
            long cppPropertyArtboard = cppPropertyArtboard(traverse.getCppPointer(), str);
            if (cppPropertyArtboard != 0) {
                ViewModelArtboardProperty viewModelArtboardProperty = new ViewModelArtboardProperty(cppPropertyArtboard);
                traverse.getProperties().put(str, viewModelArtboardProperty);
                getDependencies().add(viewModelArtboardProperty);
                viewModelProperty = viewModelArtboardProperty;
            } else {
                throw new ViewModelException("Property not found: " + path);
            }
        } else if (!(viewModelProperty instanceof ViewModelArtboardProperty)) {
            throw new ViewModelException("Property '" + str + "' exists but is not of the expected type.");
        }
        return (ViewModelArtboardProperty) viewModelProperty;
    }

    @NotNull
    public ViewModelBooleanProperty getBooleanProperty(@NotNull String path) {
        Intrinsics.checkNotNullParameter(path, "path");
        List split$default = StringsKt.split$default(path, new String[]{"/"}, false, 0, 6, null);
        List<String> subList = split$default.subList(0, split$default.size() - 1);
        String str = (String) CollectionsKt.z0(split$default);
        ViewModelInstance traverse = traverse(subList);
        ViewModelProperty<?> viewModelProperty = traverse.getProperties().get(str);
        if (viewModelProperty == null) {
            long cppPropertyBoolean = cppPropertyBoolean(traverse.getCppPointer(), str);
            if (cppPropertyBoolean != 0) {
                ViewModelBooleanProperty viewModelBooleanProperty = new ViewModelBooleanProperty(cppPropertyBoolean);
                traverse.getProperties().put(str, viewModelBooleanProperty);
                getDependencies().add(viewModelBooleanProperty);
                viewModelProperty = viewModelBooleanProperty;
            } else {
                throw new ViewModelException("Property not found: " + path);
            }
        } else if (!(viewModelProperty instanceof ViewModelBooleanProperty)) {
            throw new ViewModelException("Property '" + str + "' exists but is not of the expected type.");
        }
        return (ViewModelBooleanProperty) viewModelProperty;
    }

    @NotNull
    protected Map<String, ViewModelInstance> getChildren() {
        return this.children;
    }

    @NotNull
    public ViewModelColorProperty getColorProperty(@NotNull String path) {
        Intrinsics.checkNotNullParameter(path, "path");
        List split$default = StringsKt.split$default(path, new String[]{"/"}, false, 0, 6, null);
        List<String> subList = split$default.subList(0, split$default.size() - 1);
        String str = (String) CollectionsKt.z0(split$default);
        ViewModelInstance traverse = traverse(subList);
        ViewModelProperty<?> viewModelProperty = traverse.getProperties().get(str);
        if (viewModelProperty == null) {
            long cppPropertyColor = cppPropertyColor(traverse.getCppPointer(), str);
            if (cppPropertyColor != 0) {
                ViewModelColorProperty viewModelColorProperty = new ViewModelColorProperty(cppPropertyColor);
                traverse.getProperties().put(str, viewModelColorProperty);
                getDependencies().add(viewModelColorProperty);
                viewModelProperty = viewModelColorProperty;
            } else {
                throw new ViewModelException("Property not found: " + path);
            }
        } else if (!(viewModelProperty instanceof ViewModelColorProperty)) {
            throw new ViewModelException("Property '" + str + "' exists but is not of the expected type.");
        }
        return (ViewModelColorProperty) viewModelProperty;
    }

    @NotNull
    public ViewModelEnumProperty getEnumProperty(@NotNull String path) {
        Intrinsics.checkNotNullParameter(path, "path");
        List split$default = StringsKt.split$default(path, new String[]{"/"}, false, 0, 6, null);
        List<String> subList = split$default.subList(0, split$default.size() - 1);
        String str = (String) CollectionsKt.z0(split$default);
        ViewModelInstance traverse = traverse(subList);
        ViewModelProperty<?> viewModelProperty = traverse.getProperties().get(str);
        if (viewModelProperty == null) {
            long cppPropertyEnum = cppPropertyEnum(traverse.getCppPointer(), str);
            if (cppPropertyEnum != 0) {
                ViewModelEnumProperty viewModelEnumProperty = new ViewModelEnumProperty(cppPropertyEnum);
                traverse.getProperties().put(str, viewModelEnumProperty);
                getDependencies().add(viewModelEnumProperty);
                viewModelProperty = viewModelEnumProperty;
            } else {
                throw new ViewModelException("Property not found: " + path);
            }
        } else if (!(viewModelProperty instanceof ViewModelEnumProperty)) {
            throw new ViewModelException("Property '" + str + "' exists but is not of the expected type.");
        }
        return (ViewModelEnumProperty) viewModelProperty;
    }

    @NotNull
    public ViewModelImageProperty getImageProperty(@NotNull String path) {
        Intrinsics.checkNotNullParameter(path, "path");
        List split$default = StringsKt.split$default(path, new String[]{"/"}, false, 0, 6, null);
        List<String> subList = split$default.subList(0, split$default.size() - 1);
        String str = (String) CollectionsKt.z0(split$default);
        ViewModelInstance traverse = traverse(subList);
        ViewModelProperty<?> viewModelProperty = traverse.getProperties().get(str);
        if (viewModelProperty == null) {
            long cppPropertyImage = cppPropertyImage(traverse.getCppPointer(), str);
            if (cppPropertyImage != 0) {
                ViewModelImageProperty viewModelImageProperty = new ViewModelImageProperty(cppPropertyImage);
                traverse.getProperties().put(str, viewModelImageProperty);
                getDependencies().add(viewModelImageProperty);
                viewModelProperty = viewModelImageProperty;
            } else {
                throw new ViewModelException("Property not found: " + path);
            }
        } else if (!(viewModelProperty instanceof ViewModelImageProperty)) {
            throw new ViewModelException("Property '" + str + "' exists but is not of the expected type.");
        }
        return (ViewModelImageProperty) viewModelProperty;
    }

    @NotNull
    public ViewModelInstance getInstanceProperty(@NotNull String path) {
        Intrinsics.checkNotNullParameter(path, "path");
        return traverse(StringsKt.split$default(path, new String[]{"/"}, false, 0, 6, null));
    }

    @NotNull
    public ViewModelListProperty getListProperty(@NotNull String path) {
        Intrinsics.checkNotNullParameter(path, "path");
        List split$default = StringsKt.split$default(path, new String[]{"/"}, false, 0, 6, null);
        List<String> subList = split$default.subList(0, split$default.size() - 1);
        String str = (String) CollectionsKt.z0(split$default);
        ViewModelInstance traverse = traverse(subList);
        ViewModelProperty<?> viewModelProperty = traverse.getProperties().get(str);
        if (viewModelProperty == null) {
            long cppPropertyList = cppPropertyList(traverse.getCppPointer(), str);
            if (cppPropertyList != 0) {
                ViewModelListProperty viewModelListProperty = new ViewModelListProperty(cppPropertyList);
                traverse.getProperties().put(str, viewModelListProperty);
                getDependencies().add(viewModelListProperty);
                viewModelProperty = viewModelListProperty;
            } else {
                throw new ViewModelException("Property not found: " + path);
            }
        } else if (!(viewModelProperty instanceof ViewModelListProperty)) {
            throw new ViewModelException("Property '" + str + "' exists but is not of the expected type.");
        }
        return (ViewModelListProperty) viewModelProperty;
    }

    @NotNull
    public String getName() {
        return cppName(getCppPointer());
    }

    @NotNull
    public ViewModelNumberProperty getNumberProperty(@NotNull String path) {
        Intrinsics.checkNotNullParameter(path, "path");
        List split$default = StringsKt.split$default(path, new String[]{"/"}, false, 0, 6, null);
        List<String> subList = split$default.subList(0, split$default.size() - 1);
        String str = (String) CollectionsKt.z0(split$default);
        ViewModelInstance traverse = traverse(subList);
        ViewModelProperty<?> viewModelProperty = traverse.getProperties().get(str);
        if (viewModelProperty == null) {
            long cppPropertyNumber = cppPropertyNumber(traverse.getCppPointer(), str);
            if (cppPropertyNumber != 0) {
                ViewModelNumberProperty viewModelNumberProperty = new ViewModelNumberProperty(cppPropertyNumber);
                traverse.getProperties().put(str, viewModelNumberProperty);
                getDependencies().add(viewModelNumberProperty);
                viewModelProperty = viewModelNumberProperty;
            } else {
                throw new ViewModelException("Property not found: " + path);
            }
        } else if (!(viewModelProperty instanceof ViewModelNumberProperty)) {
            throw new ViewModelException("Property '" + str + "' exists but is not of the expected type.");
        }
        return (ViewModelNumberProperty) viewModelProperty;
    }

    @NotNull
    protected Map<String, ViewModelProperty<?>> getProperties() {
        return this.properties;
    }

    @NotNull
    public ViewModelStringProperty getStringProperty(@NotNull String path) {
        Intrinsics.checkNotNullParameter(path, "path");
        List split$default = StringsKt.split$default(path, new String[]{"/"}, false, 0, 6, null);
        List<String> subList = split$default.subList(0, split$default.size() - 1);
        String str = (String) CollectionsKt.z0(split$default);
        ViewModelInstance traverse = traverse(subList);
        ViewModelProperty<?> viewModelProperty = traverse.getProperties().get(str);
        if (viewModelProperty == null) {
            long cppPropertyString = cppPropertyString(traverse.getCppPointer(), str);
            if (cppPropertyString != 0) {
                ViewModelStringProperty viewModelStringProperty = new ViewModelStringProperty(cppPropertyString);
                traverse.getProperties().put(str, viewModelStringProperty);
                getDependencies().add(viewModelStringProperty);
                viewModelProperty = viewModelStringProperty;
            } else {
                throw new ViewModelException("Property not found: " + path);
            }
        } else if (!(viewModelProperty instanceof ViewModelStringProperty)) {
            throw new ViewModelException("Property '" + str + "' exists but is not of the expected type.");
        }
        return (ViewModelStringProperty) viewModelProperty;
    }

    @NotNull
    public ViewModelTriggerProperty getTriggerProperty(@NotNull String path) {
        Intrinsics.checkNotNullParameter(path, "path");
        List split$default = StringsKt.split$default(path, new String[]{"/"}, false, 0, 6, null);
        List<String> subList = split$default.subList(0, split$default.size() - 1);
        String str = (String) CollectionsKt.z0(split$default);
        ViewModelInstance traverse = traverse(subList);
        ViewModelProperty<?> viewModelProperty = traverse.getProperties().get(str);
        if (viewModelProperty == null) {
            long cppPropertyTrigger = cppPropertyTrigger(traverse.getCppPointer(), str);
            if (cppPropertyTrigger != 0) {
                ViewModelTriggerProperty viewModelTriggerProperty = new ViewModelTriggerProperty(cppPropertyTrigger);
                traverse.getProperties().put(str, viewModelTriggerProperty);
                getDependencies().add(viewModelTriggerProperty);
                viewModelProperty = viewModelTriggerProperty;
            } else {
                throw new ViewModelException("Property not found: " + path);
            }
        } else if (!(viewModelProperty instanceof ViewModelTriggerProperty)) {
            throw new ViewModelException("Property '" + str + "' exists but is not of the expected type.");
        }
        return (ViewModelTriggerProperty) viewModelProperty;
    }

    public void pollChanges$kotlin_release() {
        Iterator<T> it = getProperties().values().iterator();
        while (it.hasNext()) {
            ((ViewModelProperty) it.next()).pollChanges$kotlin_release();
        }
        for (ViewModelInstance viewModelInstance : getChildren().values()) {
            viewModelInstance.pollChanges$kotlin_release();
        }
    }

    protected void setChildren(@NotNull Map<String, ViewModelInstance> map) {
        Intrinsics.checkNotNullParameter(map, "<set-?>");
        this.children = map;
    }

    public void setInstanceProperty(@NotNull String path, @NotNull ViewModelInstance instance) {
        Intrinsics.checkNotNullParameter(path, "path");
        Intrinsics.checkNotNullParameter(instance, "instance");
        List split$default = StringsKt.split$default(path, new String[]{"/"}, false, 0, 6, null);
        List<String> subList = split$default.subList(0, split$default.size() - 1);
        String str = (String) CollectionsKt.z0(split$default);
        ViewModelInstance traverse = traverse(subList);
        if (cppSetInstanceProperty(traverse.getCppPointer(), str, instance.getCppPointer())) {
            traverse.getChildren().put(str, instance);
            return;
        }
        throw new ViewModelException("Property not found: " + path + "; or instance is incompatible.");
    }

    protected void setProperties(@NotNull Map<String, ViewModelProperty<?>> map) {
        Intrinsics.checkNotNullParameter(map, "<set-?>");
        this.properties = map;
    }

    @NotNull
    public Transfer transfer() {
        return new Transfer(this);
    }
}
