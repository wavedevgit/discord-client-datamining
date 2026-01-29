package kotlin.reflect.jvm.internal.impl.incremental.components;

import java.io.Serializable;
import kotlin.jvm.internal.DefaultConstructorMarker;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class Position implements Serializable {
    @NotNull
    public static final Companion Companion = new Companion(null);

    /* renamed from: i  reason: collision with root package name */
    private static final Position f33949i = new Position(-1, -1);

    /* renamed from: d  reason: collision with root package name */
    private final int f33950d;

    /* renamed from: e  reason: collision with root package name */
    private final int f33951e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final Position getNO_POSITION() {
            return Position.f33949i;
        }

        private Companion() {
        }
    }

    public Position(int i10, int i11) {
        this.f33950d = i10;
        this.f33951e = i11;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof Position) {
            Position position = (Position) obj;
            return this.f33950d == position.f33950d && this.f33951e == position.f33951e;
        }
        return false;
    }

    public int hashCode() {
        return (Integer.hashCode(this.f33950d) * 31) + Integer.hashCode(this.f33951e);
    }

    @NotNull
    public String toString() {
        return "Position(line=" + this.f33950d + ", column=" + this.f33951e + ')';
    }
}
