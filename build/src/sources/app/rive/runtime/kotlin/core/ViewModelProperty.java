package app.rive.runtime.kotlin.core;

import com.facebook.react.devsupport.StackTraceHelper;
import kotlin.Metadata;
import kotlinx.coroutines.flow.MutableStateFlow;
import ks.g;
import ks.j0;
import ks.l0;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000:\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\t\n\u0002\b\u0004\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0006\n\u0002\u0010\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\r\b'\u0018\u0000*\u0004\b\u0000\u0010\u00012\u00020\u0002B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u0018\u0010\t\u001a\u00020\b2\u0006\u0010\u0007\u001a\u00020\u0003H\u0082 ¢\u0006\u0004\b\t\u0010\nJ\u0018\u0010\f\u001a\u00020\u000b2\u0006\u0010\u0007\u001a\u00020\u0003H\u0086 ¢\u0006\u0004\b\f\u0010\rJ\u0018\u0010\u000e\u001a\u00020\b2\u0006\u0010\u0007\u001a\u00020\u0003H\u0087 ¢\u0006\u0004\b\u000e\u0010\nJ\u000f\u0010\u000f\u001a\u00028\u0000H$¢\u0006\u0004\b\u000f\u0010\u0010J\u0017\u0010\u0013\u001a\u00020\u00122\u0006\u0010\u0011\u001a\u00028\u0000H$¢\u0006\u0004\b\u0013\u0010\u0014J\u000f\u0010\u0017\u001a\u00020\u0012H\u0000¢\u0006\u0004\b\u0015\u0010\u0016R\u001a\u0010\u0019\u001a\b\u0012\u0004\u0012\u00028\u00000\u00188\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0019\u0010\u001aR\u001d\u0010\u001c\u001a\b\u0012\u0004\u0012\u00028\u00000\u001b8\u0006¢\u0006\f\n\u0004\b\u001c\u0010\u001d\u001a\u0004\b\u001e\u0010\u001fR\u0011\u0010\"\u001a\u00020\u000b8F¢\u0006\u0006\u001a\u0004\b \u0010!R$\u0010\u0011\u001a\u00028\u00002\u0006\u0010\u0011\u001a\u00028\u00008F@FX\u0086\u000e¢\u0006\f\u001a\u0004\b#\u0010\u0010\"\u0004\b$\u0010\u0014R\u0014\u0010'\u001a\u00020\b8@X\u0080\u0004¢\u0006\u0006\u001a\u0004\b%\u0010&¨\u0006("}, d2 = {"Lapp/rive/runtime/kotlin/core/ViewModelProperty;", "T", "Lapp/rive/runtime/kotlin/core/NativeObject;", "", "unsafeCppPointer", "<init>", "(J)V", "cppPointer", "", "cppFlushChanges", "(J)Z", "", "cppName", "(J)Ljava/lang/String;", "cppHasChanged", "nativeGetValue", "()Ljava/lang/Object;", "value", "", "nativeSetValue", "(Ljava/lang/Object;)V", "pollChanges$kotlin_release", "()V", "pollChanges", "Lkotlinx/coroutines/flow/MutableStateFlow;", "_valueFlow", "Lkotlinx/coroutines/flow/MutableStateFlow;", "Lks/j0;", "valueFlow", "Lks/j0;", "getValueFlow", "()Lks/j0;", "getName", "()Ljava/lang/String;", StackTraceHelper.NAME_KEY, "getValue", "setValue", "isSubscribed$kotlin_release", "()Z", "isSubscribed", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class ViewModelProperty<T> extends NativeObject {
    public static final int $stable = 8;
    @NotNull
    private final MutableStateFlow _valueFlow;
    @NotNull
    private final j0 valueFlow;

    public ViewModelProperty(long j10) {
        super(j10);
        MutableStateFlow a10 = l0.a(nativeGetValue());
        this._valueFlow = a10;
        this.valueFlow = g.a(a10);
    }

    private final native boolean cppFlushChanges(long j10);

    public final native boolean cppHasChanged(long j10);

    @NotNull
    public final native String cppName(long j10);

    @NotNull
    public final String getName() {
        return cppName(getCppPointer());
    }

    public final T getValue() {
        return (T) this._valueFlow.getValue();
    }

    @NotNull
    public final j0 getValueFlow() {
        return this.valueFlow;
    }

    public final boolean isSubscribed$kotlin_release() {
        if (((Number) this._valueFlow.d().getValue()).intValue() > 0) {
            return true;
        }
        return false;
    }

    protected abstract T nativeGetValue();

    protected abstract void nativeSetValue(T t10);

    public final void pollChanges$kotlin_release() {
        if (cppHasChanged(getCppPointer())) {
            this._valueFlow.setValue(nativeGetValue());
            cppFlushChanges(getCppPointer());
        }
    }

    public final void setValue(T t10) {
        nativeSetValue(t10);
        this._valueFlow.setValue(t10);
    }
}
