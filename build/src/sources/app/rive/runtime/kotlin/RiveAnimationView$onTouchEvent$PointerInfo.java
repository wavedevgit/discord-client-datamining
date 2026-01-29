package app.rive.runtime.kotlin;

import com.facebook.react.devsupport.StackTraceHelper;
import kotlin.Metadata;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000'\n\u0000\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0007\n\u0002\b\r\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000*\u0001\u0000\b\u008a\b\u0018\u00002\u00020\u0001B\u001d\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0005¢\u0006\u0002\u0010\u0007J\t\u0010\r\u001a\u00020\u0003HÆ\u0003J\t\u0010\u000e\u001a\u00020\u0005HÆ\u0003J\t\u0010\u000f\u001a\u00020\u0005HÆ\u0003J,\u0010\u0010\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u0005HÆ\u0001¢\u0006\u0002\u0010\u0011J\u0013\u0010\u0012\u001a\u00020\u00132\b\u0010\u0014\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u0015\u001a\u00020\u0003HÖ\u0001J\t\u0010\u0016\u001a\u00020\u0017HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\b\u0010\tR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u000bR\u0011\u0010\u0006\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\u000b¨\u0006\u0018"}, d2 = {"app/rive/runtime/kotlin/RiveAnimationView$onTouchEvent$PointerInfo", "", StackTraceHelper.ID_KEY, "", "x", "", "y", "(IFF)V", "getId", "()I", "getX", "()F", "getY", "component1", "component2", "component3", "copy", "(IFF)Lapp/rive/runtime/kotlin/RiveAnimationView$onTouchEvent$PointerInfo;", "equals", "", "other", "hashCode", "toString", "", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class RiveAnimationView$onTouchEvent$PointerInfo {

    /* renamed from: id  reason: collision with root package name */
    private final int f6586id;

    /* renamed from: x  reason: collision with root package name */
    private final float f6587x;

    /* renamed from: y  reason: collision with root package name */
    private final float f6588y;

    public RiveAnimationView$onTouchEvent$PointerInfo(int i10, float f10, float f11) {
        this.f6586id = i10;
        this.f6587x = f10;
        this.f6588y = f11;
    }

    public static /* synthetic */ RiveAnimationView$onTouchEvent$PointerInfo copy$default(RiveAnimationView$onTouchEvent$PointerInfo riveAnimationView$onTouchEvent$PointerInfo, int i10, float f10, float f11, int i11, Object obj) {
        if ((i11 & 1) != 0) {
            i10 = riveAnimationView$onTouchEvent$PointerInfo.f6586id;
        }
        if ((i11 & 2) != 0) {
            f10 = riveAnimationView$onTouchEvent$PointerInfo.f6587x;
        }
        if ((i11 & 4) != 0) {
            f11 = riveAnimationView$onTouchEvent$PointerInfo.f6588y;
        }
        return riveAnimationView$onTouchEvent$PointerInfo.copy(i10, f10, f11);
    }

    public final int component1() {
        return this.f6586id;
    }

    public final float component2() {
        return this.f6587x;
    }

    public final float component3() {
        return this.f6588y;
    }

    @NotNull
    public final RiveAnimationView$onTouchEvent$PointerInfo copy(int i10, float f10, float f11) {
        return new RiveAnimationView$onTouchEvent$PointerInfo(i10, f10, f11);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof RiveAnimationView$onTouchEvent$PointerInfo) {
            RiveAnimationView$onTouchEvent$PointerInfo riveAnimationView$onTouchEvent$PointerInfo = (RiveAnimationView$onTouchEvent$PointerInfo) obj;
            return this.f6586id == riveAnimationView$onTouchEvent$PointerInfo.f6586id && Float.compare(this.f6587x, riveAnimationView$onTouchEvent$PointerInfo.f6587x) == 0 && Float.compare(this.f6588y, riveAnimationView$onTouchEvent$PointerInfo.f6588y) == 0;
        }
        return false;
    }

    public final int getId() {
        return this.f6586id;
    }

    public final float getX() {
        return this.f6587x;
    }

    public final float getY() {
        return this.f6588y;
    }

    public int hashCode() {
        return (((Integer.hashCode(this.f6586id) * 31) + Float.hashCode(this.f6587x)) * 31) + Float.hashCode(this.f6588y);
    }

    @NotNull
    public String toString() {
        int i10 = this.f6586id;
        float f10 = this.f6587x;
        float f11 = this.f6588y;
        return "PointerInfo(id=" + i10 + ", x=" + f10 + ", y=" + f11 + ")";
    }
}
