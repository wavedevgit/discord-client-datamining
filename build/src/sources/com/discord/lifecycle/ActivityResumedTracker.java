package com.discord.lifecycle;

import android.app.Activity;
import android.app.Application;
import android.os.Bundle;
import android.os.SystemClock;
import java.lang.ref.WeakReference;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import xr.a;
@Metadata(d1 = {"\u00006\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\t\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\bÆ\u0002\u0018\u00002\u00020\u0001:\u0002\u0012\u0013B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u000e\u0010\f\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\u000fJ\u0006\u0010\u0010\u001a\u00020\u0011R\u000e\u0010\u0004\u001a\u00020\u0001X\u0082\u0004¢\u0006\u0002\n\u0000R\u0016\u0010\u0005\u001a\n\u0012\u0004\u0012\u00020\u0007\u0018\u00010\u0006X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\tX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\u000bX\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006\u0014"}, d2 = {"Lcom/discord/lifecycle/ActivityResumedTracker;", "", "<init>", "()V", "lock", "resumedActivity", "Ljava/lang/ref/WeakReference;", "Landroid/app/Activity;", "lastPausedAtElapsedRealtime", "", "initialized", "", "init", "", "application", "Landroid/app/Application;", "snapshot", "Lcom/discord/lifecycle/ActivityResumedTracker$Snapshot;", "State", "Snapshot", "lifecycle_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ActivityResumedTracker {
    private static volatile boolean initialized;
    private static long lastPausedAtElapsedRealtime;
    private static WeakReference<Activity> resumedActivity;
    @NotNull
    public static final ActivityResumedTracker INSTANCE = new ActivityResumedTracker();
    @NotNull
    private static final Object lock = new Object();

    @Metadata(d1 = {"\u0000,\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\t\n\u0002\b\n\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u00002\u00020\u0001B\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\t\u0010\f\u001a\u00020\u0003HÆ\u0003J\t\u0010\r\u001a\u00020\u0005HÆ\u0003J\u001d\u0010\u000e\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u0005HÆ\u0001J\u0013\u0010\u000f\u001a\u00020\u00102\b\u0010\u0011\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u0012\u001a\u00020\u0013HÖ\u0001J\t\u0010\u0014\u001a\u00020\u0015HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\b\u0010\tR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u000b¨\u0006\u0016"}, d2 = {"Lcom/discord/lifecycle/ActivityResumedTracker$Snapshot;", "", "state", "Lcom/discord/lifecycle/ActivityResumedTracker$State;", "lastPausedAtElapsedRealtime", "", "<init>", "(Lcom/discord/lifecycle/ActivityResumedTracker$State;J)V", "getState", "()Lcom/discord/lifecycle/ActivityResumedTracker$State;", "getLastPausedAtElapsedRealtime", "()J", "component1", "component2", "copy", "equals", "", "other", "hashCode", "", "toString", "", "lifecycle_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Snapshot {
        private final long lastPausedAtElapsedRealtime;
        @NotNull
        private final State state;

        public Snapshot(@NotNull State state, long j10) {
            Intrinsics.checkNotNullParameter(state, "state");
            this.state = state;
            this.lastPausedAtElapsedRealtime = j10;
        }

        public static /* synthetic */ Snapshot copy$default(Snapshot snapshot, State state, long j10, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                state = snapshot.state;
            }
            if ((i10 & 2) != 0) {
                j10 = snapshot.lastPausedAtElapsedRealtime;
            }
            return snapshot.copy(state, j10);
        }

        @NotNull
        public final State component1() {
            return this.state;
        }

        public final long component2() {
            return this.lastPausedAtElapsedRealtime;
        }

        @NotNull
        public final Snapshot copy(@NotNull State state, long j10) {
            Intrinsics.checkNotNullParameter(state, "state");
            return new Snapshot(state, j10);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof Snapshot) {
                Snapshot snapshot = (Snapshot) obj;
                return this.state == snapshot.state && this.lastPausedAtElapsedRealtime == snapshot.lastPausedAtElapsedRealtime;
            }
            return false;
        }

        public final long getLastPausedAtElapsedRealtime() {
            return this.lastPausedAtElapsedRealtime;
        }

        @NotNull
        public final State getState() {
            return this.state;
        }

        public int hashCode() {
            return (this.state.hashCode() * 31) + Long.hashCode(this.lastPausedAtElapsedRealtime);
        }

        @NotNull
        public String toString() {
            State state = this.state;
            long j10 = this.lastPausedAtElapsedRealtime;
            return "Snapshot(state=" + state + ", lastPausedAtElapsedRealtime=" + j10 + ")";
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    @Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0005\b\u0086\u0081\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003j\u0002\b\u0004j\u0002\b\u0005¨\u0006\u0006"}, d2 = {"Lcom/discord/lifecycle/ActivityResumedTracker$State;", "", "<init>", "(Ljava/lang/String;I)V", "RESUMED", "NOT_RESUMED", "lifecycle_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class State {
        private static final /* synthetic */ EnumEntries $ENTRIES;
        private static final /* synthetic */ State[] $VALUES;
        public static final State RESUMED = new State("RESUMED", 0);
        public static final State NOT_RESUMED = new State("NOT_RESUMED", 1);

        private static final /* synthetic */ State[] $values() {
            return new State[]{RESUMED, NOT_RESUMED};
        }

        static {
            State[] $values = $values();
            $VALUES = $values;
            $ENTRIES = a.a($values);
        }

        private State(String str, int i10) {
        }

        @NotNull
        public static EnumEntries getEntries() {
            return $ENTRIES;
        }

        public static State valueOf(String str) {
            return (State) Enum.valueOf(State.class, str);
        }

        public static State[] values() {
            return (State[]) $VALUES.clone();
        }
    }

    private ActivityResumedTracker() {
    }

    public final void init(@NotNull Application application) {
        Intrinsics.checkNotNullParameter(application, "application");
        if (initialized) {
            return;
        }
        application.registerActivityLifecycleCallbacks(new Application.ActivityLifecycleCallbacks() { // from class: com.discord.lifecycle.ActivityResumedTracker$init$1
            @Override // android.app.Application.ActivityLifecycleCallbacks
            public void onActivityCreated(Activity activity, Bundle bundle) {
                Intrinsics.checkNotNullParameter(activity, "activity");
            }

            @Override // android.app.Application.ActivityLifecycleCallbacks
            public void onActivityDestroyed(Activity activity) {
                Intrinsics.checkNotNullParameter(activity, "activity");
            }

            @Override // android.app.Application.ActivityLifecycleCallbacks
            public void onActivityPaused(Activity activity) {
                Object obj;
                WeakReference weakReference;
                Activity activity2;
                Intrinsics.checkNotNullParameter(activity, "activity");
                obj = ActivityResumedTracker.lock;
                synchronized (obj) {
                    try {
                        weakReference = ActivityResumedTracker.resumedActivity;
                        if (weakReference != null) {
                            activity2 = (Activity) weakReference.get();
                        } else {
                            activity2 = null;
                        }
                        if (activity2 == activity) {
                            ActivityResumedTracker.lastPausedAtElapsedRealtime = SystemClock.elapsedRealtime();
                            ActivityResumedTracker.resumedActivity = null;
                        }
                        Unit unit = Unit.f32056a;
                    } catch (Throwable th2) {
                        throw th2;
                    }
                }
            }

            @Override // android.app.Application.ActivityLifecycleCallbacks
            public void onActivityResumed(Activity activity) {
                Object obj;
                Intrinsics.checkNotNullParameter(activity, "activity");
                obj = ActivityResumedTracker.lock;
                synchronized (obj) {
                    ActivityResumedTracker.resumedActivity = new WeakReference(activity);
                    Unit unit = Unit.f32056a;
                }
            }

            @Override // android.app.Application.ActivityLifecycleCallbacks
            public void onActivitySaveInstanceState(Activity activity, Bundle outState) {
                Intrinsics.checkNotNullParameter(activity, "activity");
                Intrinsics.checkNotNullParameter(outState, "outState");
            }

            @Override // android.app.Application.ActivityLifecycleCallbacks
            public void onActivityStarted(Activity activity) {
                Intrinsics.checkNotNullParameter(activity, "activity");
            }

            @Override // android.app.Application.ActivityLifecycleCallbacks
            public void onActivityStopped(Activity activity) {
                Intrinsics.checkNotNullParameter(activity, "activity");
            }
        });
        initialized = true;
    }

    @NotNull
    public final Snapshot snapshot() {
        Snapshot snapshot;
        Activity activity;
        State state;
        synchronized (lock) {
            try {
                WeakReference<Activity> weakReference = resumedActivity;
                if (weakReference != null) {
                    activity = weakReference.get();
                } else {
                    activity = null;
                }
                if (activity != null) {
                    state = State.RESUMED;
                } else {
                    state = State.NOT_RESUMED;
                }
                snapshot = new Snapshot(state, lastPausedAtElapsedRealtime);
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return snapshot;
    }
}
