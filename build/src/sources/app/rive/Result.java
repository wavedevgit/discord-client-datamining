package app.rive;

import kotlin.Metadata;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.Intrinsics;
import or.p;
import org.jetbrains.annotations.NotNull;
import w0.a;
import w0.c;
@Metadata(d1 = {"\u0000\"\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\bv\u0018\u0000*\u0006\b\u0000\u0010\u0001 \u00012\u00020\u0002:\u0003\b\t\nJE\u0010\u0006\u001a\b\u0012\u0004\u0012\u00028\u00020\u0000\"\u0004\b\u0001\u0010\u0001\"\u0004\b\u0002\u0010\u0003*\b\u0012\u0004\u0012\u00028\u00010\u00002\u0018\u0010\u0005\u001a\u0014\u0012\u0004\u0012\u00028\u0001\u0012\n\u0012\b\u0012\u0004\u0012\u00028\u00020\u00000\u0004H\u0017¢\u0006\u0004\b\u0006\u0010\u0007\u0082\u0001\u0003\u000b\f\r¨\u0006\u000e"}, d2 = {"Lapp/rive/Result;", "T", "", "R", "Lkotlin/Function1;", "onSuccess", "andThen", "(Lapp/rive/Result;Lkotlin/jvm/functions/Function3;Lw0/a;I)Lapp/rive/Result;", "Error", "Loading", "Success", "Lapp/rive/Result$Error;", "Lapp/rive/Result$Loading;", "Lapp/rive/Result$Success;", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface Result<T> {

    @Metadata(k = 3, mv = {1, 9, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class DefaultImpls {
        @NotNull
        public static <T_I1, T, R> Result<R> andThen(@NotNull Result<? extends T_I1> result, @NotNull Result<? extends T> receiver, @NotNull Function3 onSuccess, a aVar, int i10) {
            Result<R> result2;
            Intrinsics.checkNotNullParameter(receiver, "$receiver");
            Intrinsics.checkNotNullParameter(onSuccess, "onSuccess");
            aVar.i(-244087083);
            if (c.c()) {
                c.e(-244087083, i10, -1, "app.rive.Result.andThen (RiveUI.kt:55)");
            }
            if (receiver instanceof Loading) {
                result2 = Loading.INSTANCE;
            } else if (receiver instanceof Error) {
                result2 = new Error(((Error) receiver).getThrowable());
            } else if (receiver instanceof Success) {
                result2 = (Result) onSuccess.invoke(((Success) receiver).getValue(), aVar, Integer.valueOf(i10 & 112));
            } else {
                throw new p();
            }
            if (c.c()) {
                c.d();
            }
            aVar.g();
            return result2;
        }
    }

    @Metadata(d1 = {"\u0000.\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u0001\n\u0000\n\u0002\u0010\u0003\n\u0002\b\u0006\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\b\u0087\b\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\r\u0012\u0006\u0010\u0003\u001a\u00020\u0004¢\u0006\u0002\u0010\u0005J\t\u0010\b\u001a\u00020\u0004HÆ\u0003J\u0013\u0010\t\u001a\u00020\u00002\b\b\u0002\u0010\u0003\u001a\u00020\u0004HÆ\u0001J\u0013\u0010\n\u001a\u00020\u000b2\b\u0010\f\u001a\u0004\u0018\u00010\rHÖ\u0003J\t\u0010\u000e\u001a\u00020\u000fHÖ\u0001J\t\u0010\u0010\u001a\u00020\u0011HÖ\u0001R\u0011\u0010\u0003\u001a\u00020\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007¨\u0006\u0012"}, d2 = {"Lapp/rive/Result$Error;", "Lapp/rive/Result;", "", "throwable", "", "(Ljava/lang/Throwable;)V", "getThrowable", "()Ljava/lang/Throwable;", "component1", "copy", "equals", "", "other", "", "hashCode", "", "toString", "", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Error implements Result {
        public static final int $stable = 8;
        @NotNull
        private final Throwable throwable;

        public Error(@NotNull Throwable throwable) {
            Intrinsics.checkNotNullParameter(throwable, "throwable");
            this.throwable = throwable;
        }

        public static /* synthetic */ Error copy$default(Error error, Throwable th2, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                th2 = error.throwable;
            }
            return error.copy(th2);
        }

        @Override // app.rive.Result
        @NotNull
        public <T, R> Result<R> andThen(@NotNull Result<? extends T> result, @NotNull Function3 function3, a aVar, int i10) {
            return DefaultImpls.andThen(this, result, function3, aVar, i10);
        }

        @NotNull
        public final Throwable component1() {
            return this.throwable;
        }

        @NotNull
        public final Error copy(@NotNull Throwable throwable) {
            Intrinsics.checkNotNullParameter(throwable, "throwable");
            return new Error(throwable);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof Error) && Intrinsics.areEqual(this.throwable, ((Error) obj).throwable);
        }

        @NotNull
        public final Throwable getThrowable() {
            return this.throwable;
        }

        public int hashCode() {
            return this.throwable.hashCode();
        }

        @NotNull
        public String toString() {
            Throwable th2 = this.throwable;
            return "Error(throwable=" + th2 + ")";
        }
    }

    @Metadata(d1 = {"\u0000\u0010\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u0001\n\u0002\b\u0002\bÇ\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u0007\b\u0002¢\u0006\u0002\u0010\u0003¨\u0006\u0004"}, d2 = {"Lapp/rive/Result$Loading;", "Lapp/rive/Result;", "", "()V", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Loading implements Result {
        public static final int $stable = 0;
        @NotNull
        public static final Loading INSTANCE = new Loading();

        private Loading() {
        }

        @Override // app.rive.Result
        @NotNull
        public <T, R> Result<R> andThen(@NotNull Result<? extends T> result, @NotNull Function3 function3, a aVar, int i10) {
            return DefaultImpls.andThen(this, result, function3, aVar, i10);
        }
    }

    @Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\t\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\b\u0087\b\u0018\u0000*\u0004\b\u0001\u0010\u00012\b\u0012\u0004\u0012\u0002H\u00010\u0002B\r\u0012\u0006\u0010\u0003\u001a\u00028\u0001¢\u0006\u0002\u0010\u0004J\u000e\u0010\b\u001a\u00028\u0001HÆ\u0003¢\u0006\u0002\u0010\u0006J\u001e\u0010\t\u001a\b\u0012\u0004\u0012\u00028\u00010\u00002\b\b\u0002\u0010\u0003\u001a\u00028\u0001HÆ\u0001¢\u0006\u0002\u0010\nJ\u0013\u0010\u000b\u001a\u00020\f2\b\u0010\r\u001a\u0004\u0018\u00010\u000eHÖ\u0003J\t\u0010\u000f\u001a\u00020\u0010HÖ\u0001J\t\u0010\u0011\u001a\u00020\u0012HÖ\u0001R\u0013\u0010\u0003\u001a\u00028\u0001¢\u0006\n\n\u0002\u0010\u0007\u001a\u0004\b\u0005\u0010\u0006¨\u0006\u0013"}, d2 = {"Lapp/rive/Result$Success;", "T", "Lapp/rive/Result;", "value", "(Ljava/lang/Object;)V", "getValue", "()Ljava/lang/Object;", "Ljava/lang/Object;", "component1", "copy", "(Ljava/lang/Object;)Lapp/rive/Result$Success;", "equals", "", "other", "", "hashCode", "", "toString", "", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Success<T> implements Result<T> {
        public static final int $stable = 0;
        private final T value;

        public Success(T t10) {
            this.value = t10;
        }

        /* JADX WARN: Multi-variable type inference failed */
        public static /* synthetic */ Success copy$default(Success success, Object obj, int i10, Object obj2) {
            if ((i10 & 1) != 0) {
                obj = success.value;
            }
            return success.copy(obj);
        }

        @Override // app.rive.Result
        @NotNull
        public <T, R> Result<R> andThen(@NotNull Result<? extends T> result, @NotNull Function3 function3, a aVar, int i10) {
            return DefaultImpls.andThen(this, result, function3, aVar, i10);
        }

        public final T component1() {
            return this.value;
        }

        @NotNull
        public final Success<T> copy(T t10) {
            return new Success<>(t10);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof Success) && Intrinsics.areEqual(this.value, ((Success) obj).value);
        }

        public final T getValue() {
            return this.value;
        }

        public int hashCode() {
            T t10 = this.value;
            if (t10 == null) {
                return 0;
            }
            return t10.hashCode();
        }

        @NotNull
        public String toString() {
            T t10 = this.value;
            return "Success(value=" + t10 + ")";
        }
    }

    @NotNull
    <T, R> Result<R> andThen(@NotNull Result<? extends T> result, @NotNull Function3 function3, a aVar, int i10);
}
