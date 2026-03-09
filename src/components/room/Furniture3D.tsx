import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import type { Furniture } from "../../types";
import { useAppState } from "../../store/StateProvider";

interface Furniture3DProps {
  furniture: Furniture;
}

const getFurnitureHeight = (type: string): number => {
  switch (type) {
    case "sofa":
      return 40;
    case "chair":
      return 40;
    case "coffee_table":
      return 20;
    case "bookshelf":
      return 120;
    case "plant":
      return 40;
    case "wardrobe":
      return 180;
    case "rug":
      return 1;
    case "bed":
      return 30;
    case "dining_table":
      return 30;
    case "lamp":
      return 60;
    default:
      return 50;
  }
};

export const Furniture3D: React.FC<Furniture3DProps> = ({ furniture }) => {
  const { selectedFurnitureId } = useAppState();
  const meshRef = useRef<THREE.Group>(null);
  const isSelected = selectedFurnitureId === furniture.id;

  const height = getFurnitureHeight(furniture.type);

  const renderFurnitureModel = () => {
    const width = 100 * furniture.scale.x;
    const depth = 100 * furniture.scale.z;
    const color = furniture.color;
    const darkWoodColor = "#3e2723";
    const woodColor = "#5d4037";
    const metalColor = "#bdbdbd";

    switch (furniture.type) {
      case "sofa":
        return (
          <group>
            {/* Legs */}
            <mesh
              position={[width * 0.37, height * 0.065, depth * 0.37]}
              castShadow
            >
              <cylinderGeometry
                args={[width * 0.04, width * 0.03, height * 0.14, 8]}
              />
              <meshStandardMaterial color={darkWoodColor} roughness={0.7} />
            </mesh>
            <mesh
              position={[-width * 0.37, height * 0.065, depth * 0.37]}
              castShadow
            >
              <cylinderGeometry
                args={[width * 0.04, width * 0.03, height * 0.14, 8]}
              />
              <meshStandardMaterial color={darkWoodColor} roughness={0.7} />
            </mesh>
            <mesh
              position={[width * 0.37, height * 0.065, -depth * 0.37]}
              castShadow
            >
              <cylinderGeometry
                args={[width * 0.04, width * 0.03, height * 0.14, 8]}
              />
              <meshStandardMaterial color={darkWoodColor} roughness={0.7} />
            </mesh>
            <mesh
              position={[-width * 0.37, height * 0.065, -depth * 0.37]}
              castShadow
            >
              <cylinderGeometry
                args={[width * 0.04, width * 0.03, height * 0.14, 8]}
              />
              <meshStandardMaterial color={darkWoodColor} roughness={0.7} />
            </mesh>
            {/* Base body */}
            <mesh position={[0, height * 0.33, 0]} castShadow receiveShadow>
              <boxGeometry args={[width * 0.85, height * 0.52, depth]} />
              <meshStandardMaterial color={color} roughness={0.85} />
            </mesh>
            {/* Seat cushions (3) */}
            <mesh
              position={[-width * 0.27, height * 0.57, -depth * 0.04]}
              castShadow
              receiveShadow
            >
              <boxGeometry args={[width * 0.26, height * 0.17, depth * 0.7]} />
              <meshStandardMaterial color={color} roughness={0.9} />
            </mesh>
            <mesh
              position={[0, height * 0.57, -depth * 0.04]}
              castShadow
              receiveShadow
            >
              <boxGeometry args={[width * 0.26, height * 0.17, depth * 0.7]} />
              <meshStandardMaterial color={color} roughness={0.9} />
            </mesh>
            <mesh
              position={[width * 0.27, height * 0.57, -depth * 0.04]}
              castShadow
              receiveShadow
            >
              <boxGeometry args={[width * 0.26, height * 0.17, depth * 0.7]} />
              <meshStandardMaterial color={color} roughness={0.9} />
            </mesh>
            {/* Back rest */}
            <mesh
              position={[0, height * 0.76, depth * 0.36]}
              castShadow
              receiveShadow
            >
              <boxGeometry args={[width * 0.85, height * 0.6, depth * 0.26]} />
              <meshStandardMaterial color={color} roughness={0.85} />
            </mesh>
            {/* Back cushions (3) */}
            <mesh
              position={[-width * 0.27, height * 0.77, depth * 0.27]}
              castShadow
            >
              <boxGeometry args={[width * 0.26, height * 0.47, depth * 0.06]} />
              <meshStandardMaterial color={color} roughness={0.9} />
            </mesh>
            <mesh position={[0, height * 0.77, depth * 0.27]} castShadow>
              <boxGeometry args={[width * 0.26, height * 0.47, depth * 0.06]} />
              <meshStandardMaterial color={color} roughness={0.9} />
            </mesh>
            <mesh
              position={[width * 0.27, height * 0.77, depth * 0.27]}
              castShadow
            >
              <boxGeometry args={[width * 0.26, height * 0.47, depth * 0.06]} />
              <meshStandardMaterial color={color} roughness={0.9} />
            </mesh>
            {/* Armrests */}
            <mesh
              position={[width * 0.42, height * 0.55, 0]}
              castShadow
              receiveShadow
            >
              <boxGeometry args={[width * 0.14, height * 0.63, depth]} />
              <meshStandardMaterial color={color} roughness={0.85} />
            </mesh>
            <mesh
              position={[-width * 0.42, height * 0.55, 0]}
              castShadow
              receiveShadow
            >
              <boxGeometry args={[width * 0.14, height * 0.63, depth]} />
              <meshStandardMaterial color={color} roughness={0.85} />
            </mesh>
          </group>
        );

      case "chair":
        return (
          <group>
            {/* Legs */}
            <mesh
              position={[width * 0.3, height * 0.2, depth * 0.3]}
              castShadow
            >
              <cylinderGeometry
                args={[width * 0.04, width * 0.03, height * 0.4, 8]}
              />
              <meshStandardMaterial color={darkWoodColor} roughness={0.7} />
            </mesh>
            <mesh
              position={[-width * 0.3, height * 0.2, depth * 0.3]}
              castShadow
            >
              <cylinderGeometry
                args={[width * 0.04, width * 0.03, height * 0.4, 8]}
              />
              <meshStandardMaterial color={darkWoodColor} roughness={0.7} />
            </mesh>
            <mesh
              position={[width * 0.3, height * 0.2, -depth * 0.3]}
              castShadow
            >
              <cylinderGeometry
                args={[width * 0.04, width * 0.03, height * 0.4, 8]}
              />
              <meshStandardMaterial color={darkWoodColor} roughness={0.7} />
            </mesh>
            <mesh
              position={[-width * 0.3, height * 0.2, -depth * 0.3]}
              castShadow
            >
              <cylinderGeometry
                args={[width * 0.04, width * 0.03, height * 0.4, 8]}
              />
              <meshStandardMaterial color={darkWoodColor} roughness={0.7} />
            </mesh>
            {/* Seat frame */}
            <mesh position={[0, height * 0.42, 0]} castShadow receiveShadow>
              <boxGeometry args={[width * 0.9, height * 0.12, depth * 0.9]} />
              <meshStandardMaterial color={darkWoodColor} roughness={0.7} />
            </mesh>
            {/* Seat cushion */}
            <mesh position={[0, height * 0.5, 0]} castShadow receiveShadow>
              <boxGeometry args={[width * 0.84, height * 0.1, depth * 0.84]} />
              <meshStandardMaterial color={color} roughness={0.9} />
            </mesh>
            {/* Back frame */}
            <mesh
              position={[0, height * 0.76, depth * 0.38]}
              castShadow
              receiveShadow
            >
              <boxGeometry args={[width * 0.9, height * 0.65, depth * 0.08]} />
              <meshStandardMaterial color={darkWoodColor} roughness={0.7} />
            </mesh>
            {/* Back cushion */}
            <mesh
              position={[0, height * 0.73, depth * 0.36]}
              castShadow
              receiveShadow
            >
              <boxGeometry args={[width * 0.78, height * 0.53, depth * 0.07]} />
              <meshStandardMaterial color={color} roughness={0.9} />
            </mesh>
          </group>
        );

      case "coffee_table":
        return (
          <group>
            {/* Tabletop */}
            <mesh position={[0, height * 0.96, 0]} castShadow receiveShadow>
              <boxGeometry args={[width, height * 0.08, depth]} />
              <meshStandardMaterial color={color} roughness={0.5} />
            </mesh>
            {/* Edge trim */}
            <mesh position={[0, height * 1.0, 0]} castShadow>
              <boxGeometry args={[width * 1.04, height * 0.04, depth * 1.04]} />
              <meshStandardMaterial color={color} roughness={0.45} />
            </mesh>
            {/* Lower shelf */}
            <mesh position={[0, height * 0.3, 0]} castShadow receiveShadow>
              <boxGeometry args={[width * 0.85, height * 0.05, depth * 0.85]} />
              <meshStandardMaterial color={color} roughness={0.55} />
            </mesh>
            {/* Legs */}
            <mesh
              position={[width * 0.38, height * 0.45, depth * 0.38]}
              castShadow
            >
              <cylinderGeometry
                args={[width * 0.04, width * 0.03, height * 0.9, 8]}
              />
              <meshStandardMaterial color={darkWoodColor} roughness={0.7} />
            </mesh>
            <mesh
              position={[-width * 0.38, height * 0.45, depth * 0.38]}
              castShadow
            >
              <cylinderGeometry
                args={[width * 0.04, width * 0.03, height * 0.9, 8]}
              />
              <meshStandardMaterial color={darkWoodColor} roughness={0.7} />
            </mesh>
            <mesh
              position={[width * 0.38, height * 0.45, -depth * 0.38]}
              castShadow
            >
              <cylinderGeometry
                args={[width * 0.04, width * 0.03, height * 0.9, 8]}
              />
              <meshStandardMaterial color={darkWoodColor} roughness={0.7} />
            </mesh>
            <mesh
              position={[-width * 0.38, height * 0.45, -depth * 0.38]}
              castShadow
            >
              <cylinderGeometry
                args={[width * 0.04, width * 0.03, height * 0.9, 8]}
              />
              <meshStandardMaterial color={darkWoodColor} roughness={0.7} />
            </mesh>
          </group>
        );

      case "dining_table":
        return (
          <group>
            {/* Tabletop */}
            <mesh position={[0, height * 0.96, 0]} castShadow receiveShadow>
              <boxGeometry args={[width, height * 0.08, depth]} />
              <meshStandardMaterial color={color} roughness={0.5} />
            </mesh>
            {/* Apron - long sides */}
            <mesh
              position={[0, height * 0.88, depth * 0.42]}
              castShadow
              receiveShadow
            >
              <boxGeometry args={[width * 0.85, height * 0.07, depth * 0.05]} />
              <meshStandardMaterial color={color} roughness={0.6} />
            </mesh>
            <mesh
              position={[0, height * 0.88, -depth * 0.42]}
              castShadow
              receiveShadow
            >
              <boxGeometry args={[width * 0.85, height * 0.07, depth * 0.05]} />
              <meshStandardMaterial color={color} roughness={0.6} />
            </mesh>
            {/* Apron - short sides */}
            <mesh
              position={[width * 0.44, height * 0.88, 0]}
              castShadow
              receiveShadow
            >
              <boxGeometry args={[width * 0.08, height * 0.07, depth * 0.85]} />
              <meshStandardMaterial color={color} roughness={0.6} />
            </mesh>
            <mesh
              position={[-width * 0.44, height * 0.88, 0]}
              castShadow
              receiveShadow
            >
              <boxGeometry args={[width * 0.08, height * 0.07, depth * 0.85]} />
              <meshStandardMaterial color={color} roughness={0.6} />
            </mesh>
            {/* Legs */}
            <mesh
              position={[width * 0.4, height * 0.45, depth * 0.4]}
              castShadow
            >
              <cylinderGeometry
                args={[width * 0.04, width * 0.035, height * 0.9, 8]}
              />
              <meshStandardMaterial color={darkWoodColor} roughness={0.7} />
            </mesh>
            <mesh
              position={[-width * 0.4, height * 0.45, depth * 0.4]}
              castShadow
            >
              <cylinderGeometry
                args={[width * 0.04, width * 0.035, height * 0.9, 8]}
              />
              <meshStandardMaterial color={darkWoodColor} roughness={0.7} />
            </mesh>
            <mesh
              position={[width * 0.4, height * 0.45, -depth * 0.4]}
              castShadow
            >
              <cylinderGeometry
                args={[width * 0.04, width * 0.035, height * 0.9, 8]}
              />
              <meshStandardMaterial color={darkWoodColor} roughness={0.7} />
            </mesh>
            <mesh
              position={[-width * 0.4, height * 0.45, -depth * 0.4]}
              castShadow
            >
              <cylinderGeometry
                args={[width * 0.04, width * 0.035, height * 0.9, 8]}
              />
              <meshStandardMaterial color={darkWoodColor} roughness={0.7} />
            </mesh>
          </group>
        );

      case "bookshelf": {
        const bsDepth = depth * 0.4;
        return (
          <group>
            {/* Side panels */}
            <mesh
              position={[width * 0.47, height * 0.5, 0]}
              castShadow
              receiveShadow
            >
              <boxGeometry args={[width * 0.06, height, bsDepth]} />
              <meshStandardMaterial color={color} roughness={0.7} />
            </mesh>
            <mesh
              position={[-width * 0.47, height * 0.5, 0]}
              castShadow
              receiveShadow
            >
              <boxGeometry args={[width * 0.06, height, bsDepth]} />
              <meshStandardMaterial color={color} roughness={0.7} />
            </mesh>
            {/* Back panel */}
            <mesh
              position={[0, height * 0.5, -bsDepth * 0.45]}
              castShadow
              receiveShadow
            >
              <boxGeometry args={[width, height, bsDepth * 0.06]} />
              <meshStandardMaterial color={color} roughness={0.75} />
            </mesh>
            {/* Top */}
            <mesh position={[0, height * 0.97, 0]} castShadow receiveShadow>
              <boxGeometry args={[width, height * 0.06, bsDepth]} />
              <meshStandardMaterial color={color} roughness={0.7} />
            </mesh>
            {/* Bottom */}
            <mesh position={[0, height * 0.03, 0]} castShadow receiveShadow>
              <boxGeometry args={[width, height * 0.06, bsDepth]} />
              <meshStandardMaterial color={color} roughness={0.7} />
            </mesh>
            {/* Shelves */}
            <mesh position={[0, height * 0.28, 0]} castShadow receiveShadow>
              <boxGeometry args={[width * 0.88, height * 0.04, bsDepth]} />
              <meshStandardMaterial color={color} roughness={0.7} />
            </mesh>
            <mesh position={[0, height * 0.54, 0]} castShadow receiveShadow>
              <boxGeometry args={[width * 0.88, height * 0.04, bsDepth]} />
              <meshStandardMaterial color={color} roughness={0.7} />
            </mesh>
            <mesh position={[0, height * 0.78, 0]} castShadow receiveShadow>
              <boxGeometry args={[width * 0.88, height * 0.04, bsDepth]} />
              <meshStandardMaterial color={color} roughness={0.7} />
            </mesh>
            {/* Books - bottom shelf */}
            {(
              [
                "#e53935",
                "#1e88e5",
                "#43a047",
                "#fb8c00",
                "#8e24aa",
                "#00acc1",
              ] as string[]
            ).map((bc, i) => (
              <mesh
                key={`b0-${i}`}
                position={[-width * 0.35 + i * width * 0.13, height * 0.17, 0]}
                castShadow
              >
                <boxGeometry
                  args={[width * 0.1, height * 0.22, bsDepth * 0.8]}
                />
                <meshStandardMaterial color={bc} roughness={0.8} />
              </mesh>
            ))}
            {/* Books - middle shelf */}
            {(
              [
                "#fdd835",
                "#6d4c41",
                "#546e7a",
                "#ec407a",
                "#26a69a",
              ] as string[]
            ).map((bc, i) => (
              <mesh
                key={`b1-${i}`}
                position={[-width * 0.28 + i * width * 0.13, height * 0.44, 0]}
                castShadow
              >
                <boxGeometry
                  args={[width * 0.1, height * 0.22, bsDepth * 0.8]}
                />
                <meshStandardMaterial color={bc} roughness={0.8} />
              </mesh>
            ))}
            {/* Books - top shelf */}
            {(["#c62828", "#283593", "#2e7d32", "#f57f17"] as string[]).map(
              (bc, i) => (
                <mesh
                  key={`b2-${i}`}
                  position={[
                    -width * 0.22 + i * width * 0.13,
                    height * 0.68,
                    0,
                  ]}
                  castShadow
                >
                  <boxGeometry
                    args={[width * 0.1, height * 0.22, bsDepth * 0.8]}
                  />
                  <meshStandardMaterial color={bc} roughness={0.8} />
                </mesh>
              ),
            )}
          </group>
        );
      }

      case "wardrobe":
        return (
          <group>
            {/* Main body */}
            <mesh position={[0, height * 0.5, 0]} castShadow receiveShadow>
              <boxGeometry args={[width, height, depth]} />
              <meshStandardMaterial color={color} roughness={0.7} />
            </mesh>
            {/* Left door outer panel */}
            <mesh
              position={[width * 0.25, height * 0.55, depth * 0.505]}
              castShadow
            >
              <boxGeometry args={[width * 0.46, height * 0.82, depth * 0.02]} />
              <meshStandardMaterial color={color} roughness={0.6} />
            </mesh>
            {/* Left door inner panel */}
            <mesh
              position={[width * 0.25, height * 0.55, depth * 0.52]}
              castShadow
            >
              <boxGeometry args={[width * 0.36, height * 0.7, depth * 0.02]} />
              <meshStandardMaterial color={color} roughness={0.55} />
            </mesh>
            {/* Right door outer panel */}
            <mesh
              position={[-width * 0.25, height * 0.55, depth * 0.505]}
              castShadow
            >
              <boxGeometry args={[width * 0.46, height * 0.82, depth * 0.02]} />
              <meshStandardMaterial color={color} roughness={0.6} />
            </mesh>
            {/* Right door inner panel */}
            <mesh
              position={[-width * 0.25, height * 0.55, depth * 0.52]}
              castShadow
            >
              <boxGeometry args={[width * 0.36, height * 0.7, depth * 0.02]} />
              <meshStandardMaterial color={color} roughness={0.55} />
            </mesh>
            {/* Center divider strip */}
            <mesh position={[0, height * 0.5, depth * 0.508]}>
              <boxGeometry args={[width * 0.04, height, depth * 0.02]} />
              <meshStandardMaterial color={color} roughness={0.7} />
            </mesh>
            {/* Handles */}
            <mesh
              position={[width * 0.07, height * 0.5, depth * 0.56]}
              castShadow
            >
              <cylinderGeometry
                args={[width * 0.02, width * 0.02, height * 0.1, 8]}
              />
              <meshStandardMaterial
                color={metalColor}
                metalness={0.8}
                roughness={0.2}
              />
            </mesh>
            <mesh
              position={[-width * 0.07, height * 0.5, depth * 0.56]}
              castShadow
            >
              <cylinderGeometry
                args={[width * 0.02, width * 0.02, height * 0.1, 8]}
              />
              <meshStandardMaterial
                color={metalColor}
                metalness={0.8}
                roughness={0.2}
              />
            </mesh>
            {/* Base plinth */}
            <mesh position={[0, height * 0.04, 0]} castShadow receiveShadow>
              <boxGeometry args={[width * 1.02, height * 0.07, depth * 0.96]} />
              <meshStandardMaterial color={darkWoodColor} roughness={0.8} />
            </mesh>
            {/* Top cornice */}
            <mesh position={[0, height * 1.02, 0]} castShadow>
              <boxGeometry args={[width * 1.04, height * 0.04, depth * 1.04]} />
              <meshStandardMaterial color={darkWoodColor} roughness={0.8} />
            </mesh>
          </group>
        );

      case "lamp":
        return (
          <group>
            {/* Base disc */}
            <mesh position={[0, height * 0.04, 0]} castShadow receiveShadow>
              <cylinderGeometry
                args={[width * 0.22, width * 0.26, height * 0.06, 24]}
              />
              <meshStandardMaterial
                color="#262626"
                metalness={0.4}
                roughness={0.4}
              />
            </mesh>
            {/* Pole */}
            <mesh position={[0, height * 0.52, 0]} castShadow>
              <cylinderGeometry
                args={[width * 0.03, width * 0.03, height * 0.96, 12]}
              />
              <meshStandardMaterial
                color="#616161"
                metalness={0.6}
                roughness={0.3}
              />
            </mesh>
            {/* Shade (open cone) */}
            <mesh position={[0, height * 0.87, 0]} castShadow>
              <cylinderGeometry
                args={[width * 0.09, width * 0.24, height * 0.22, 24, 1, true]}
              />
              <meshStandardMaterial color={color} roughness={0.6} side={2} />
            </mesh>
            {/* Shade top cap */}
            <mesh position={[0, height * 0.98, 0]}>
              <circleGeometry args={[width * 0.09, 24]} />
              <meshStandardMaterial color={color} roughness={0.6} />
            </mesh>
            {/* Light source */}
            <pointLight
              position={[0, height * 0.82, 0]}
              intensity={1.0}
              distance={8}
              color="#fff9c4"
              castShadow
            />
          </group>
        );

      case "rug":
        return (
          <group>
            {/* Outer rug */}
            <mesh
              position={[0, 0.5, 0]}
              receiveShadow
              rotation={[-Math.PI / 2, 0, 0]}
            >
              <planeGeometry args={[width, depth]} />
              <meshStandardMaterial color={color} roughness={0.95} side={2} />
            </mesh>
            {/* Inner border pattern */}
            <mesh
              position={[0, 1.0, 0]}
              receiveShadow
              rotation={[-Math.PI / 2, 0, 0]}
            >
              <planeGeometry args={[width * 0.88, depth * 0.88]} />
              <meshStandardMaterial color={color} roughness={0.85} side={2} />
            </mesh>
          </group>
        );

      case "plant": {
        const leafColor = color;
        const darkLeaf = "#2e7d32";
        // Individual large leaves: [x, y, z, rotX, rotY, rotZ, scaleX, scaleY]
        const leaves: [
          number,
          number,
          number,
          number,
          number,
          number,
          number,
          number,
        ][] = [
          // fan out from top of trunk
          [0, height * 0.72, width * 0.01, -0.5, 0, 0, 1, 1],
          [
            width * 0.18,
            height * 0.68,
            width * 0.06,
            -0.4,
            0.6,
            -0.3,
            0.9,
            0.85,
          ],
          [
            -width * 0.18,
            height * 0.68,
            width * 0.06,
            -0.4,
            -0.6,
            0.3,
            0.9,
            0.85,
          ],
          [
            width * 0.22,
            height * 0.6,
            -width * 0.04,
            -0.3,
            1.2,
            0.2,
            0.85,
            0.8,
          ],
          [
            -width * 0.22,
            height * 0.6,
            -width * 0.04,
            -0.3,
            -1.2,
            -0.2,
            0.85,
            0.8,
          ],
          [
            width * 0.08,
            height * 0.55,
            width * 0.22,
            0.4,
            0.3,
            -0.1,
            0.8,
            0.75,
          ],
          [
            -width * 0.08,
            height * 0.55,
            width * 0.22,
            0.4,
            -0.3,
            0.1,
            0.8,
            0.75,
          ],
          [
            width * 0.14,
            height * 0.8,
            -width * 0.08,
            -0.6,
            0.9,
            0.15,
            0.75,
            0.7,
          ],
          [
            -width * 0.14,
            height * 0.8,
            -width * 0.08,
            -0.6,
            -0.9,
            -0.15,
            0.75,
            0.7,
          ],
          [0, height * 0.88, width * 0.12, -0.7, 0, 0, 0.7, 0.65],
          [width * 0.26, height * 0.74, width * 0.12, -0.3, 1.5, 0.3, 0.7, 0.6],
          [
            -width * 0.26,
            height * 0.74,
            width * 0.12,
            -0.3,
            -1.5,
            -0.3,
            0.7,
            0.6,
          ],
        ];
        return (
          <group>
            {/* Pot body — tapered terracotta */}
            <mesh position={[0, height * 0.17, 0]} castShadow receiveShadow>
              <cylinderGeometry
                args={[width * 0.27, width * 0.19, height * 0.33, 24]}
              />
              <meshStandardMaterial color="#bf360c" roughness={0.85} />
            </mesh>
            {/* Pot rim */}
            <mesh position={[0, height * 0.345, 0]} castShadow>
              <cylinderGeometry
                args={[width * 0.3, width * 0.27, height * 0.04, 24]}
              />
              <meshStandardMaterial color="#8d2600" roughness={0.75} />
            </mesh>
            {/* Pot base ring */}
            <mesh position={[0, height * 0.015, 0]} receiveShadow>
              <cylinderGeometry
                args={[width * 0.2, width * 0.18, height * 0.03, 24]}
              />
              <meshStandardMaterial color="#8d2600" roughness={0.8} />
            </mesh>
            {/* Soil disc */}
            <mesh position={[0, height * 0.362, 0]}>
              <cylinderGeometry
                args={[width * 0.26, width * 0.26, height * 0.015, 24]}
              />
              <meshStandardMaterial color="#3e2723" roughness={1.0} />
            </mesh>
            {/* Main trunk — lower */}
            <mesh position={[0, height * 0.47, 0]} castShadow>
              <cylinderGeometry
                args={[width * 0.055, width * 0.07, height * 0.26, 10]}
              />
              <meshStandardMaterial color="#4e342e" roughness={0.9} />
            </mesh>
            {/* Main trunk — upper, slight lean */}
            <mesh
              position={[width * 0.02, height * 0.62, width * 0.01]}
              rotation={[0.05, 0, 0.07]}
              castShadow
            >
              <cylinderGeometry
                args={[width * 0.04, width * 0.055, height * 0.22, 10]}
              />
              <meshStandardMaterial color="#4e342e" roughness={0.9} />
            </mesh>
            {/* Individual leaves as flattened ellipsoids */}
            {leaves.map(([lx, ly, lz, rx, ry, rz, sx, sy], i) => (
              <mesh
                key={`leaf-${i}`}
                position={[lx, ly, lz]}
                rotation={[rx, ry, rz]}
                scale={[sx, sy, 0.08]}
                castShadow
              >
                <sphereGeometry args={[width * 0.28, 12, 8]} />
                <meshStandardMaterial
                  color={
                    i % 3 === 0 ? leafColor : i % 3 === 1 ? darkLeaf : leafColor
                  }
                  roughness={0.75}
                  side={2}
                />
              </mesh>
            ))}
          </group>
        );
      }

      case "bed":
        return (
          <group>
            {/* Platform base */}
            <mesh position={[0, height * 0.2, 0]} castShadow receiveShadow>
              <boxGeometry args={[width, height * 0.35, depth * 0.88]} />
              <meshStandardMaterial color={woodColor} roughness={0.7} />
            </mesh>
            {/* Mattress */}
            <mesh
              position={[0, height * 0.44, -depth * 0.04]}
              castShadow
              receiveShadow
            >
              <boxGeometry args={[width * 0.95, height * 0.18, depth * 0.8]} />
              <meshStandardMaterial color="#eceff1" roughness={0.9} />
            </mesh>
            {/* Blanket / duvet */}
            <mesh
              position={[0, height * 0.54, -depth * 0.1]}
              castShadow
              receiveShadow
            >
              <boxGeometry args={[width * 0.94, height * 0.07, depth * 0.62]} />
              <meshStandardMaterial color={color} roughness={0.95} />
            </mesh>
            {/* Pillow left */}
            <mesh
              position={[width * 0.22, height * 0.56, depth * 0.3]}
              castShadow
              receiveShadow
            >
              <boxGeometry args={[width * 0.38, height * 0.1, depth * 0.18]} />
              <meshStandardMaterial color="#fafafa" roughness={0.9} />
            </mesh>
            {/* Pillow right */}
            <mesh
              position={[-width * 0.22, height * 0.56, depth * 0.3]}
              castShadow
              receiveShadow
            >
              <boxGeometry args={[width * 0.38, height * 0.1, depth * 0.18]} />
              <meshStandardMaterial color="#fafafa" roughness={0.9} />
            </mesh>
            {/* Headboard */}
            <mesh
              position={[0, height * 0.65, depth * 0.43]}
              castShadow
              receiveShadow
            >
              <boxGeometry args={[width, height * 0.85, depth * 0.1]} />
              <meshStandardMaterial color={woodColor} roughness={0.6} />
            </mesh>
            {/* Headboard upholstery panel */}
            <mesh position={[0, height * 0.66, depth * 0.475]} castShadow>
              <boxGeometry args={[width * 0.85, height * 0.68, depth * 0.03]} />
              <meshStandardMaterial color={color} roughness={0.85} />
            </mesh>
            {/* Footboard */}
            <mesh
              position={[0, height * 0.42, -depth * 0.44]}
              castShadow
              receiveShadow
            >
              <boxGeometry args={[width, height * 0.46, depth * 0.08]} />
              <meshStandardMaterial color={woodColor} roughness={0.6} />
            </mesh>
          </group>
        );

      default:
        return (
          <mesh position={[0, height * 0.5, 0]} castShadow receiveShadow>
            <boxGeometry args={[width, height, depth]} />
            <meshStandardMaterial color={color} roughness={0.7} />
          </mesh>
        );
    }
  };

  useEffect(() => {
    if (meshRef.current) {
      if (isSelected) {
        meshRef.current.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.material.emissive = new THREE.Color(0x555555);
          }
        });
      } else {
        meshRef.current.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.material.emissive = new THREE.Color(0x000000);
          }
        });
      }
    }
  }, [isSelected]);

  return (
    <group
      ref={meshRef}
      position={[furniture.position.x, 0, furniture.position.z]}
      rotation={[0, furniture.rotation.y, 0]}
      scale={[furniture.scale.x, furniture.scale.y, furniture.scale.z]}
      userData={{ id: furniture.id, type: furniture.type, isFurniture: true }}
    >
      {renderFurnitureModel()}

      {isSelected && (
        <lineSegments>
          <edgesGeometry
            attach="geometry"
            args={[new THREE.BoxGeometry(100, height, 100)]}
          />
          <lineBasicMaterial attach="material" color="blue" linewidth={1} />
        </lineSegments>
      )}
    </group>
  );
};
