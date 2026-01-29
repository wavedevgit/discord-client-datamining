package com.facebook.react.animated;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.layoutanimation.SimpleSpringInterpolator;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000>\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\t\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0006\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\f\b\u0000\u0018\u0000 '2\u00020\u0001:\u0002&'B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u0010\u0010\u001b\u001a\u00020\u001c2\u0006\u0010\u0002\u001a\u00020\u0003H\u0016J\u0010\u0010\u001d\u001a\u00020\u001c2\u0006\u0010\u001e\u001a\u00020\u0007H\u0016J\u0010\u0010\u001f\u001a\u00020\u000b2\u0006\u0010 \u001a\u00020\u0011H\u0002J\u0010\u0010$\u001a\u00020\u001c2\u0006\u0010%\u001a\u00020\u000bH\u0002R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\tX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\u000bX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\u000bX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\r\u001a\u00020\u000bX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u000e\u001a\u00020\u000bX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u000f\u001a\u00020\tX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0010\u001a\u00020\u0011X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0012\u001a\u00020\u000bX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0013\u001a\u00020\u000bX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0014\u001a\u00020\u000bX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0015\u001a\u00020\u000bX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0016\u001a\u00020\u000bX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0017\u001a\u00020\u0018X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0019\u001a\u00020\u0018X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u001a\u001a\u00020\u000bX\u0082\u000e¢\u0006\u0002\n\u0000R\u0014\u0010!\u001a\u00020\t8BX\u0082\u0004¢\u0006\u0006\u001a\u0004\b!\u0010\"R\u0014\u0010#\u001a\u00020\t8BX\u0082\u0004¢\u0006\u0006\u001a\u0004\b#\u0010\"¨\u0006("}, d2 = {"Lcom/facebook/react/animated/SpringAnimation;", "Lcom/facebook/react/animated/AnimationDriver;", "config", "Lcom/facebook/react/bridge/ReadableMap;", "<init>", "(Lcom/facebook/react/bridge/ReadableMap;)V", "lastTime", "", "springStarted", "", "springStiffness", "", SimpleSpringInterpolator.PARAM_SPRING_DAMPING, "springMass", "initialVelocity", "overshootClampingEnabled", "currentState", "Lcom/facebook/react/animated/SpringAnimation$PhysicsState;", "startValue", "endValue", "restSpeedThreshold", "displacementFromRestThreshold", "timeAccumulator", "iterations", "", "currentLoop", "originalValue", "resetConfig", "", "runAnimationStep", "frameTimeNanos", "getDisplacementDistanceForState", "state", "isAtRest", "()Z", "isOvershooting", "advance", "realDeltaTime", "PhysicsState", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nSpringAnimation.kt\nKotlin\n*S Kotlin\n*F\n+ 1 SpringAnimation.kt\ncom/facebook/react/animated/SpringAnimation\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,188:1\n1#2:189\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class SpringAnimation extends AnimationDriver {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private static final double MAX_DELTA_TIME_SEC = 0.064d;
    private int currentLoop;
    @NotNull
    private final PhysicsState currentState;
    private double displacementFromRestThreshold;
    private double endValue;
    private double initialVelocity;
    private int iterations;
    private long lastTime;
    private double originalValue;
    private boolean overshootClampingEnabled;
    private double restSpeedThreshold;
    private double springDamping;
    private double springMass;
    private boolean springStarted;
    private double springStiffness;
    private double startValue;
    private double timeAccumulator;

    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0006\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000¨\u0006\u0006"}, d2 = {"Lcom/facebook/react/animated/SpringAnimation$Companion;", "", "<init>", "()V", "MAX_DELTA_TIME_SEC", "", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    @Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0006\n\u0002\b\r\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\b\u0082\b\u0018\u00002\u00020\u0001B\u001b\u0012\b\b\u0002\u0010\u0002\u001a\u00020\u0003\u0012\b\b\u0002\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\t\u0010\r\u001a\u00020\u0003HÆ\u0003J\t\u0010\u000e\u001a\u00020\u0003HÆ\u0003J\u001d\u0010\u000f\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u0003HÆ\u0001J\u0013\u0010\u0010\u001a\u00020\u00112\b\u0010\u0012\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u0013\u001a\u00020\u0014HÖ\u0001J\t\u0010\u0015\u001a\u00020\u0016HÖ\u0001R\u001a\u0010\u0002\u001a\u00020\u0003X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0007\u0010\b\"\u0004\b\t\u0010\nR\u001a\u0010\u0004\u001a\u00020\u0003X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u000b\u0010\b\"\u0004\b\f\u0010\n¨\u0006\u0017"}, d2 = {"Lcom/facebook/react/animated/SpringAnimation$PhysicsState;", "", ViewProps.POSITION, "", "velocity", "<init>", "(DD)V", "getPosition", "()D", "setPosition", "(D)V", "getVelocity", "setVelocity", "component1", "component2", "copy", "equals", "", "other", "hashCode", "", "toString", "", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class PhysicsState {
        private double position;
        private double velocity;

        public PhysicsState() {
            this(0.0d, 0.0d, 3, null);
        }

        public static /* synthetic */ PhysicsState copy$default(PhysicsState physicsState, double d10, double d11, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                d10 = physicsState.position;
            }
            if ((i10 & 2) != 0) {
                d11 = physicsState.velocity;
            }
            return physicsState.copy(d10, d11);
        }

        public final double component1() {
            return this.position;
        }

        public final double component2() {
            return this.velocity;
        }

        @NotNull
        public final PhysicsState copy(double d10, double d11) {
            return new PhysicsState(d10, d11);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof PhysicsState) {
                PhysicsState physicsState = (PhysicsState) obj;
                return Double.compare(this.position, physicsState.position) == 0 && Double.compare(this.velocity, physicsState.velocity) == 0;
            }
            return false;
        }

        public final double getPosition() {
            return this.position;
        }

        public final double getVelocity() {
            return this.velocity;
        }

        public int hashCode() {
            return (Double.hashCode(this.position) * 31) + Double.hashCode(this.velocity);
        }

        public final void setPosition(double d10) {
            this.position = d10;
        }

        public final void setVelocity(double d10) {
            this.velocity = d10;
        }

        @NotNull
        public String toString() {
            double d10 = this.position;
            double d11 = this.velocity;
            return "PhysicsState(position=" + d10 + ", velocity=" + d11 + ")";
        }

        public PhysicsState(double d10, double d11) {
            this.position = d10;
            this.velocity = d11;
        }

        public /* synthetic */ PhysicsState(double d10, double d11, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this((i10 & 1) != 0 ? 0.0d : d10, (i10 & 2) != 0 ? 0.0d : d11);
        }
    }

    public SpringAnimation(@NotNull ReadableMap config) {
        Intrinsics.checkNotNullParameter(config, "config");
        PhysicsState physicsState = new PhysicsState(0.0d, 0.0d, 3, null);
        this.currentState = physicsState;
        physicsState.setVelocity(config.getDouble("initialVelocity"));
        resetConfig(config);
    }

    private final void advance(double d10) {
        double d11;
        double d12;
        if (!isAtRest()) {
            double d13 = MAX_DELTA_TIME_SEC;
            if (d10 <= MAX_DELTA_TIME_SEC) {
                d13 = d10;
            }
            this.timeAccumulator += d13;
            double d14 = this.springDamping;
            double d15 = this.springMass;
            double d16 = this.springStiffness;
            double d17 = -this.initialVelocity;
            double sqrt = d14 / (2 * Math.sqrt(d16 * d15));
            double sqrt2 = Math.sqrt(d16 / d15);
            double sqrt3 = Math.sqrt(1.0d - (sqrt * sqrt)) * sqrt2;
            double d18 = this.endValue - this.startValue;
            double d19 = this.timeAccumulator;
            if (sqrt < 1.0d) {
                double exp = Math.exp((-sqrt) * sqrt2 * d19);
                double d20 = sqrt2 * sqrt;
                double d21 = d17 + (d20 * d18);
                double d22 = d19 * sqrt3;
                d12 = this.endValue - ((((d21 / sqrt3) * Math.sin(d22)) + (Math.cos(d22) * d18)) * exp);
                d11 = ((d20 * exp) * (((Math.sin(d22) * d21) / sqrt3) + (Math.cos(d22) * d18))) - (exp * ((Math.cos(d22) * d21) - ((sqrt3 * d18) * Math.sin(d22))));
            } else {
                double exp2 = Math.exp((-sqrt2) * d19);
                double d23 = this.endValue - (((((sqrt2 * d18) + d17) * d19) + d18) * exp2);
                d11 = exp2 * ((d17 * ((d19 * sqrt2) - 1)) + (d19 * d18 * sqrt2 * sqrt2));
                d12 = d23;
            }
            this.currentState.setPosition(d12);
            this.currentState.setVelocity(d11);
            if (!isAtRest() && (!this.overshootClampingEnabled || !isOvershooting())) {
                return;
            }
            if (this.springStiffness > 0.0d) {
                double d24 = this.endValue;
                this.startValue = d24;
                this.currentState.setPosition(d24);
            } else {
                double position = this.currentState.getPosition();
                this.endValue = position;
                this.startValue = position;
            }
            this.currentState.setVelocity(0.0d);
        }
    }

    private final double getDisplacementDistanceForState(PhysicsState physicsState) {
        return Math.abs(this.endValue - physicsState.getPosition());
    }

    private final boolean isAtRest() {
        if (Math.abs(this.currentState.getVelocity()) <= this.restSpeedThreshold) {
            if (getDisplacementDistanceForState(this.currentState) <= this.displacementFromRestThreshold || this.springStiffness == 0.0d) {
                return true;
            }
            return false;
        }
        return false;
    }

    private final boolean isOvershooting() {
        if (this.springStiffness > 0.0d) {
            if (this.startValue >= this.endValue || this.currentState.getPosition() <= this.endValue) {
                if (this.startValue > this.endValue && this.currentState.getPosition() < this.endValue) {
                    return true;
                }
                return false;
            }
            return true;
        }
        return false;
    }

    @Override // com.facebook.react.animated.AnimationDriver
    public void resetConfig(@NotNull ReadableMap config) {
        int i10;
        Intrinsics.checkNotNullParameter(config, "config");
        this.springStiffness = config.getDouble("stiffness");
        this.springDamping = config.getDouble("damping");
        this.springMass = config.getDouble("mass");
        this.initialVelocity = this.currentState.getVelocity();
        this.endValue = config.getDouble("toValue");
        this.restSpeedThreshold = config.getDouble("restSpeedThreshold");
        this.displacementFromRestThreshold = config.getDouble("restDisplacementThreshold");
        this.overshootClampingEnabled = config.getBoolean("overshootClamping");
        boolean z10 = true;
        if (config.hasKey("iterations")) {
            i10 = config.getInt("iterations");
        } else {
            i10 = 1;
        }
        this.iterations = i10;
        if (i10 != 0) {
            z10 = false;
        }
        this.hasFinished = z10;
        this.currentLoop = 0;
        this.timeAccumulator = 0.0d;
        this.springStarted = false;
    }

    @Override // com.facebook.react.animated.AnimationDriver
    public void runAnimationStep(long j10) {
        ValueAnimatedNode valueAnimatedNode = this.animatedValue;
        if (valueAnimatedNode != null) {
            long j11 = j10 / 1000000;
            if (!this.springStarted) {
                if (this.currentLoop == 0) {
                    this.originalValue = valueAnimatedNode.nodeValue;
                    this.currentLoop = 1;
                }
                this.currentState.setPosition(valueAnimatedNode.nodeValue);
                this.startValue = this.currentState.getPosition();
                this.lastTime = j11;
                this.timeAccumulator = 0.0d;
                this.springStarted = true;
            }
            advance((j11 - this.lastTime) / 1000.0d);
            this.lastTime = j11;
            valueAnimatedNode.nodeValue = this.currentState.getPosition();
            if (isAtRest()) {
                int i10 = this.iterations;
                if (i10 != -1 && this.currentLoop >= i10) {
                    this.hasFinished = true;
                    return;
                }
                this.springStarted = false;
                valueAnimatedNode.nodeValue = this.originalValue;
                this.currentLoop++;
                return;
            }
            return;
        }
        throw new IllegalArgumentException("Animated value should not be null");
    }
}
